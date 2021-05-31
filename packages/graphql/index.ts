import { GraphQLFieldResolver } from 'graphql';
import { GraphQLParams } from "express-graphql";
import { IncomingMessage } from 'http';
import { IUser } from '../auth';
import { AuthContext } from '../auth/Auth';

export { loadResolverDirectories, loadTypeDirectories } from "./loaders";

export { default as INode } from './INode';

export * from './ErrorInterceptor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/ban-types
export type GrapgQLContext<T = {}, U = {}> = {
    user?: IUser<U>;
    auth?: AuthContext;
    params: GraphQLParams;
    request: IncomingMessage;
} & T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Resolver = GraphQLFieldResolver<unknown, GrapgQLContext, Record<string, any>>;
