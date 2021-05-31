import { IUser } from "./IUser";

export default interface IAuth {
    user: IUser;
    token: string;
}