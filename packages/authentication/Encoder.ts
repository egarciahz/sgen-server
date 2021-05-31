import { IUser } from "./IUser";
import { LocalFinder, UNAME_KEY } from "./Auth";

export type Next = (...args: unknown[]) => void;
export type Deserialize = (email: string, next: Next) => Promise<IUser>;
export type Serialize = (user: IUser, next: Next) => void;

export default class Encoder {
    static serialize() {
        return (user: IUser, next: Next): void => {
            next(null, user[UNAME_KEY]);
        }
    }

    static deserialize(finder: LocalFinder): Deserialize {
        return (email: string, next: Next): Promise<IUser> =>
            finder(email)
                .then(user => {
                    next(null, user);
                    return user;
                })
                .catch(error => {
                    next(null, false, error);
                    return error;
                });
    }
}