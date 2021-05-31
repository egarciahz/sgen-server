/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

/**
 * 
 * @param target object target
 * @param fields array of names to exclude of target
 * @returns 
 */
export default function omitFields<T extends Record<string, any>, K extends keyof T>(target: T, fields: K[]): { [k in Exclude<keyof T, K>]: T[k] } {
    return _.omitBy(target, (_value, key) => {
        return fields.includes(key);
    });
}
