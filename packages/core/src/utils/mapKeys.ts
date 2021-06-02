/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description 
 * Rename keys of an object
 * 
 * @param target - base object
 * @param predicate - function modifier that return string for new key name or null for skip
 * s
 */
export const mapKeys = <T extends Record<string, any>>(
    target: T,
    predicate: (key: keyof T) => string | null
): Record<string, any> =>
    Object.keys(target)
        .reduce<Record<string, any>>((store, key) => {
            const newKey = predicate(key);
            if (newKey) store[newKey] = target[key];

            return store;
        }, {});

