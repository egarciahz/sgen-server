import { omit } from "lodash";

type Node = { id: string | number };
type MappedValue<V extends Node> = Omit<V, 'id'> & Partial<Pick<V, 'id'>>;

/**
 * @description 
 * mapping of items from the described collection,
 * the result is an object with fields 'update' and 'insert'.
 * 
 */
export function mapAdditionals<V extends Node>(values: V[] = []): { update: V[], insert: Omit<V, 'id'>[] } {
    return values.reduce((store, value) => (
        (['new', 'add', '0', '-1', 0, -1].includes(value.id) ?
            store.insert.push(omit(value, 'id')) :
            store.update.push(value)
        ) && store
    ), { update: [], insert: [] });
}

/**
 * @description
 * mapping of items from the collection described,
 * the result is a collection with items that had the
 * 'id' field cleared to be created in the database,
 * those that retain their 'id' field are destined for updating.
 */
export function prepareBulkCreate<V extends Node>(values: V[]): MappedValue<V>[] {
    return values.map((value) => ((
        ['new', 'add', '0', '-1', 0, -1].includes(value.id) ? omit(value, 'id') : value) as MappedValue<V>
    ));
}