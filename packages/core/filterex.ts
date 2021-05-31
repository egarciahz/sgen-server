/* eslint-disable @typescript-eslint/no-explicit-any */

const filterex = <T extends Record<string, any>>(target: T, regExp: RegExp): Record<string, any> =>
    Object.keys(target)
        .filter((key) => regExp.test(key))
        .reduce((store, key) => ({ ...store, [key]: target[key] }), {});

export default filterex;
