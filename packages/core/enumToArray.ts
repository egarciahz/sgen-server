/* eslint-disable @typescript-eslint/no-explicit-any */
export const enumKeysToArray = <D extends Record<string, any>>(target: D): (keyof D)[] =>
    Object.keys(target)
        .filter(key => isNaN(Number(key)));

export const enumValToArray = <D extends Record<string, any>>(target: D): any[] =>
    Object.keys(target)
        .filter(key => isNaN(Number(key)))
        .map(key => target[key]);

