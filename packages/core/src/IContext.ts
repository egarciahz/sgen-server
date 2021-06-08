import { Response, Request } from 'express'
import { GraphQLParams } from 'express-graphql'

// eslint-disable-next-line @typescript-eslint/ban-types
export default interface IContext<R = {}, Q = {}> {
    response: Response & R
    request: Request & Q
    params: GraphQLParams
}
