import { Op } from "sequelize";

type Options<I extends string> = {
    fieldName?: I,
    mode?: "start" | "end" | "flex" | "fixed"
}
type LikeSearch<I extends string> = { [K in I]?: { [Op.like]: string } }

// eslint-disable-next-line @typescript-eslint/ban-types
export function likeSearch<T extends string | null, I extends string | "name" = "name">(name?: T, options?: Options<I>): T extends string ? LikeSearch<I> : {} {
    const { fieldName = "name", mode = "start" } = options || {};

    if (typeof name !== "string" || name?.trim() === "") {
        return {} as never;
    }

    const search =
        mode == "start" ? `${name}%` :
            mode == "flex" ? `%${name}%` :
                mode == "end" ? `%${name}` : name;

    return {
        [fieldName]: {
            [Op.like]: search
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
}
