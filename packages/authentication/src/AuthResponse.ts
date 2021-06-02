import { Response } from 'express';
import { AuthContext } from './Auth';
import { IUser } from './IUser';

export default interface AuthResponse extends Response {
    user?: IUser;
    auth?: AuthContext;
}
