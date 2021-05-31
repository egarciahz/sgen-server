import { MiddlewareFn } from "type-graphql";

export const ErrorInterceptor: MiddlewareFn<unknown> = async ({ info }, next) => {
    try {
        return await next();
    } catch (err) {
        console.error(`Error: [${info.operation.name.value}] on field '${info.fieldName}' [path] ${info.path.typename}.`, err.message);
        // rethrow the error
        throw err;
    }
};
