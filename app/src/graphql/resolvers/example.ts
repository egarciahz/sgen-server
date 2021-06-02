import { ObjectType, Resolver, Field, Query, ID } from 'type-graphql'
import { INode } from '@server/gql'

@ObjectType({
    implements: [INode],
    description: 'This is a kind Example',
})
export class Example implements INode {
    @Field(() => ID)
    id: number

    @Field(() => String)
    name: string
}

@Resolver(() => Example)
export class ExampleResolver {
    @Query(() => Example)
    async example(): Promise<Example> {
        const example = new Example()
        example.id = 1
        example.name = 'Example name'
        return Promise.resolve(example)
    }
}
