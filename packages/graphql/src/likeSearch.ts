import { Op } from 'sequelize'

type Options<I extends string> = {
    fieldName?: I
    mode?: 'start' | 'end' | 'flex' | 'fixed'
}

type LikeSearch<I extends string> = { [K in I]?: { [Op.like]: string } }

/**
 * @description
 * make query for search field using the 'like' operator
 *
 */
export function likeSearch<
    T extends string | null,
    I extends string | 'name' = 'name'
>(
    value?: T,
    options?: Options<I>
): T extends string ? LikeSearch<I> : Record<string, void> {
    const { fieldName = 'name', mode = 'start' } = options || {}

    if (typeof value !== 'string' || value?.trim() === '') {
        return {} as never
    }

    const search =
        mode == 'start'
            ? `${value}%`
            : mode == 'flex'
            ? `%${value}%`
            : mode == 'end'
            ? `%${value}`
            : value

    return {
        [fieldName]: {
            [Op.like]: search,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
}
