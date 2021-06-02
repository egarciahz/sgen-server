import crypto from "crypto";
import { GetPath } from "./IFile";

export default function makeRandomName(): ReturnType<GetPath<void>> {
    return new Promise((res, rej) => {
        crypto.randomBytes(16, function (err, raw) {
            if (err) {
                return rej(err)
            }
            res(raw.toString('hex'));
        })
    });
}