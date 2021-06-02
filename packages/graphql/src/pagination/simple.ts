import { ArgsType, ClassType, Field, Int, ObjectType } from 'type-graphql'

@ArgsType()
export class ArgPaginate {
    @Field(() => Int, { defaultValue: 20, nullable: true })
    limit?: number

    @Field(() => Int, { defaultValue: 0, nullable: true })
    offset?: number
}

@ArgsType()
export class ArgPaginateSearch extends ArgPaginate {
    @Field(() => String, { nullable: true })
    search?: string
}

interface IPaginatedResponse<T> {
    rows: T[]
    count: number
}
export function PaginatedResponseType<M>(
    OType: ClassType<M>
): ClassType<IPaginatedResponse<M>> {
    @ObjectType({ isAbstract: true, description: 'Generic pagination type' })
    class PaginatedResponseClass implements IPaginatedResponse<M> {
        @Field(() => [OType], {
            defaultValue: [],
            description: `Selected range of rows in ${OType.name}`,
        })
        rows: M[]

        @Field(() => Int, {
            defaultValue: 0,
            description: `Total number of rows in ${OType.name}`,
        })
        count: number
    }

    return PaginatedResponseClass
}
