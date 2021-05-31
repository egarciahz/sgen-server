import { ArgsType, Field, ID } from "type-graphql";
import { INode } from "../../../lib/graphql";

@ArgsType()
export class ArgId implements INode {
    @Field(() => ID)
    id: number;
}