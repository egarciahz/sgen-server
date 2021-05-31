/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description
 * Filters the keys of an object and returns the ones that match the RegEx.
 * 
 * @param target - base object 
 * @param regExp - regular expresion 
 * 
 */
export const filterex = <T extends Record<string, any>>(target: T, regExp: RegExp): Record<string, any> =>
    Object.keys(target)
        .filter((key) => regExp.test(key))
        .reduce((store, key) => ({ ...store, [key]: target[key] }), {});

