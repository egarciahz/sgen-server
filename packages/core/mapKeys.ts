/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * map key names of object
 * @param target - target object
 * @param predicate - function modifier
 * 
 */
const mapKeys = <T extends Record<string, any>>(
    target: T,
    predicate: (key: keyof T) => string | null
): Record<string, any> =>
    Object.keys(target)
        .reduce<Record<string, any>>((store, key) => {
            const newKey = predicate(key);
            if (newKey) store[newKey] = target[key];

            return store;
        }, {});

export default mapKeys;
