import { ArgsType, ClassType, Field, Int, ObjectType } from "type-graphql";

@ArgsType()
export class ArgPaginate {
    @Field(() => Int, { defaultValue: 20, nullable: true })
    limit?: number;

    @Field(() => Int, { defaultValue: 0, nullable: true })
    offset?: number;
}

@ArgsType()
export class ArgPaginateSearch extends ArgPaginate {
    @Field(() => String, { nullable: true })
    search?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function PaginatedResponseType<M>(OType: ClassType<M>) {
    @ObjectType({ isAbstract: true, description: "Generic pagination type" })
    abstract class PaginatedResponseClass {
        @Field(() => [OType], { nullable: "items", description: `Selected range of rows in ${OType.name}` })
        rows: M[];

        @Field(() => Int, { defaultValue: 0, description: `Total number of rows in ${OType.name}` })
        count: number;
    }

    return PaginatedResponseClass;
}