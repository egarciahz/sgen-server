import { ArgsType, Field, ID } from 'type-graphql'
import { INode } from './INode'

@ArgsType()
export class ArgId implements INode {
    @Field(() => ID)
    id: number
}
