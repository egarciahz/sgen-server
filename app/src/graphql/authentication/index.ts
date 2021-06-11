import { pick } from 'lodash'
import { Arg, Resolver, Mutation, Query, Authorized } from 'type-graphql'
import { IAuth, Password, UnauthorizedError } from '@server/auth'
import Authenticator, { UseAuth, IUseAuth } from '../../auth'
import User from '../../entities/User'

import { Auth, SiginIn, ChangePassword } from './types'

@Resolver(() => Auth)
export class AuthResolver {
    @Mutation(() => Auth)
    async signIn(@Arg('data') { username, password }: SiginIn): Promise<Auth> {
        return Authenticator.loginWithPasswort<User>(username, password).then(
            (res) => new Auth(res.user, res.token)
        )
    }

    @Authorized()
    @Query(() => Auth, {
        description: 'Retrieve available info for currently logged user',
    })
    async me(@UseAuth() { user, token }: IUseAuth): Promise<IAuth<unknown>> {
        return Promise.resolve(new Auth(user as any, token))
    }

    @Authorized()
    @Mutation(() => Auth)
    async changePasswordOnSession(
        @Arg('data') { newPassword, password }: ChangePassword,
        @UseAuth() { user }: IUseAuth
    ): Promise<Auth> {
        const has = await Password.has(password, pick(user, 'hash', 'salt'))

        if (!has) {
            throw new UnauthorizedError("Password don't match.")
        }

        return Password.make(newPassword)
            .then((passChunk) => {
                return User.findByPk(user.id).then((user) => {
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
        @Arg('data') { username, password }: SiginIn,
        @UseAuth() { user }: IUseAuth
    ): Promise<Auth> {
        const has = await Password.has(password, pick(user, 'hash', 'salt'))

        if (!has) {
            throw new UnauthorizedError("Password don't match.")
        }

        return User.findByPk(user.id)
            .then((user) => {
                user.email = username
                return user.save()
            })
            .then((user) => Authenticator.loginWithUser(user))
            .then((res) => new Auth(res.user, res.token))
    }
}
