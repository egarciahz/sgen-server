import * as Relay from "graphql-relay";
import { ArgsType, ClassType, Field, ObjectType, Int } from "type-graphql";
import { TypeValue } from 'type-graphql/dist/decorators/types';

export type ConnectionCursor = Relay.ConnectionCursor;

type Edge<T = unknown> = ClassType<Relay.Edge<T>>

@ObjectType()
export class PageInfo implements Relay.PageInfo {
    @Field({ nullable: true })
    hasNextPage!: boolean

    @Field({ nullable: true })
    hasPreviousPage!: boolean
    
    @Field({ nullable: true })
    startCursor?: ConnectionCursor
    
    @Field({ nullable: true })
    endCursor?: ConnectionCursor
}

@ArgsType()
export class ConnectionArgs implements Relay.ConnectionArguments {
    @Field({ nullable: true, description: 'Paginate before opaque cursor' })
    before?: ConnectionCursor;

    @Field({ nullable: true, description: 'Paginate after opaque cursor' })
    after?: ConnectionCursor;

    @Field(() => Int,{ nullable: true, description: 'Paginate first' })
    first?: number;

    @Field(() => Int,{ nullable: true, description: 'Paginate last' })
    last?: number;
}

export function EdgeType<T>(nodeType: ClassType<T>): Edge<T> {
    @ObjectType({
        isAbstract: true,
        description: `Edge of ${nodeType.name} type`
    })
    abstract class AbstractEdge implements Relay.Edge<T> {
        @Field(() => nodeType)
        node!: T;

        @Field({ description: 'Used in `before` and `after` args' })
        cursor!: ConnectionCursor;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return AbstractEdge as any;
}

export function ConnectionType<T, E extends InstanceType<Edge<T>>>(edgeType: Edge<T>): ClassType<Relay.Connection<T>> {
    @ObjectType({
        isAbstract: true,
    })
    abstract class AbstractConnection implements Relay.Connection<T> {
        @Field()
        pageInfo!: PageInfo

        @Field(() => [edgeType])
        edges!: E[]
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return AbstractConnection as any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createConnectionTypes<T extends TypeValue>(name: string, nodeType: T) {
    @ObjectType(`${name}Edge`)
    class Edge implements Relay.Edge<T> {
        @Field(() => nodeType)
        node!: T

        @Field({ description: 'Used in `before` and `after` args' })
        cursor!: ConnectionCursor
    }

    @ObjectType(`${name}Connection`)
    class Connection implements Relay.Connection<T> {
        @Field()
        pageInfo!: PageInfo

        @Field(() => [Edge])
        edges!: Edge[]
    }
    return {
        Connection,
        Edge,
    }
}

export {
    connectionFromArray,
    connectionFromPromisedArray,
    connectionFromArraySlice,
    connectionFromPromisedArraySlice,
} from 'graphql-relay';
