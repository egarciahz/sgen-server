/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { pick } from 'lodash'
import { Args, Resolver, Mutation, Query, Ctx, Authorized } from 'type-graphql'
import { IAuth, Password, UnauthorizedError } from '@server/auth'
import Authenticator from '../../auth'
import User from '../../entities/User'

import { Auth, SiginIn, ChangePassword } from './types'

@Resolver(() => Auth)
export class AuthResolver {
    @Mutation(() => Auth)
    async signIn(@Args() { username, password }: SiginIn): Promise<Auth> {
        return Authenticator.loginWithPasswort<User>(username, password).then(
            (res) => new Auth(res.user, res.token)
        )
    }

    @Authorized()
    @Query(() => Auth, {
        description: 'Retrieve available info for currently logged user',
    })
    async me(@Ctx() { response }: any): Promise<IAuth<unknown>> {
        const { user, token } = response.auth
        return Promise.resolve(new Auth(user, token))
    }

    @Authorized()
    @Mutation(() => Auth)
    async changePasswordOnSession(
        @Args() { newPassword, password }: ChangePassword,
        @Ctx() { response }: any
    ): Promise<Auth> {
        const has = await Password.has(
            password,
            pick(response.auth?.user, 'hash', 'salt')
        )

        if (!has) {
            throw new UnauthorizedError("Password don't match.")
        }

        return Password.make(newPassword)
            .then((passChunk) => {
                return User.findByPk(response.auth.user.id).then((user) => {
                    user.hash = passChunk.hash
                    user.salt = passChunk.salt
                    return user.save()
                })
            })
            .then((user) => Authenticator.loginWithUser<User>(user))
            .then((res) => new Auth(res.user, res.token))
    }

    @Authorized()
    @Mutation(() => Auth)
    async changeEmailOnSession(
        @Args() { username, password }: SiginIn,
        @Ctx() { response }: any
    ): Promise<Auth> {
        const has = await Password.has(
            password,
            pick(response.user, 'hash', 'salt')
        )

        if (!has) {
            throw new UnauthorizedError("Password don't match.")
        }

        return User.findByPk(response.user.id)
            .then((user) => {
                user.email = username
                return user.save()
            })
            .then((user) => Authenticator.loginWithUser(user))
            .then((res) => new Auth(res.user, res.token))
    }
}
