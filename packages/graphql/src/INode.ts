import { Field, ID, InterfaceType } from 'type-graphql'

@InterfaceType()
export abstract class INode {
    @Field(() => ID)
    id: number
}
