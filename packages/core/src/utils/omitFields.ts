import _ from 'lodash'

/**
 *
 * @param target object target
 * @param fields array of names to exclude of target
 * @returns
 */
export default function omitFields<
    T extends Record<string, unknown>,
    K extends keyof T[]
>(target: T, fields: K[]): Omit<T, K> {
    return _.omit(target, ...fields)
}
