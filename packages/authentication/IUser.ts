// eslint-disable-next-line @typescript-eslint/ban-types
type Statement = {
    id: number;
    name: string;
    description?: string;
}

export enum ROLE_LEVEL {
    ROOT = 3,
    ADMIN = 2,
    INTEGRATOR = 1,
    USER = 0,
}

export type IPermission = Statement;

export type IRole = Statement & {
    permissions: IPermission[];
    level: ROLE_LEVEL;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type IUser<U = {}> = {
    email: string;
    active: boolean;
    verify: boolean;
    salt: string;
    hash: string;
    id: number | string;
    roles: IRole[];
    permissions: IPermission[];
    ownerId: number;
} & U;