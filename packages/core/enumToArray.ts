/* eslint-disable @typescript-eslint/no-explicit-any */

export const enumKeysToArray = <D extends Record<string, any>, K extends keyof D>(target: D) =>
    Object.keys(target)
        .filter(key => isNaN(Number(key))) as K[];

export const enumValToArray = <D extends Record<string, any>>(target: D) =>
    enumKeysToArray(target)
        .map(key => target[key]) as unknown[];
