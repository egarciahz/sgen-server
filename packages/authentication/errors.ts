import { GraphQLError } from "graphql";

export class UnauthorizedError extends GraphQLError {
    constructor(message: string) {
        super(message, undefined, undefined, undefined, undefined, undefined, { code: 401 });
    }
}

export class ForbiddenError extends GraphQLError {
    constructor(message: string) {
        super(message, undefined, undefined, undefined, undefined, undefined, { code: 403 });
    }
}

export class UnavailableTokenError extends GraphQLError {
    constructor(message: string) {
        super(message, undefined, undefined, undefined, undefined, undefined, { code: 409 });
    }
}

export class UserNotFoundError extends GraphQLError {
    constructor(message: string) {
        super(message, undefined, undefined, undefined, undefined, undefined, { code: 404 });
    }
}