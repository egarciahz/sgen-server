/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

export default function omitFields<T extends Record<string, any>>(target: T, fields: string[]): Record<string, any> {
    return _.omitBy(target, (_value, key) => {
        return fields.includes(key);
    });
}
