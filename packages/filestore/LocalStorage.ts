import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";
import crypto from "crypto";
import { FileUpload } from 'graphql-upload';

type Path = string;

type GetPath = (file: FileUpload) => Promise<string>;

interface LocalStorageOptions {
    url: string;
    rootPath?: string;
    directory?: string;
    getFileName?: GetPath;
}

interface FileStoreOptions {
    dir: Path;
    root: string;
    getName: GetPath;
}

export interface FileUploaded extends Omit<FileUpload, "createReadStream"> {
    size: number;
    path: Path;
}

const getFileName: GetPath = () => {
    return new Promise((res, rej) => {
        crypto.randomBytes(16, function (err, raw) {
            if (err) {
                return rej(err)
            }
            res(raw.toString('hex'));
        })
    });
}

export class FileStore {

    constructor(private options: FileStoreOptions) {
        mkdirp.sync(options.dir);
    }

    save(file: FileUpload): Promise<FileUploaded> {
        return this.options.getName(file).then(name => {
            return new Promise((res, rej) => {


                const finalPath = path.join(this.options.dir, name);
                const outStream = fs.createWriteStream(finalPath);
                const readStream = file.createReadStream();

                readStream.pipe(outStream);

                outStream.on("error", rej);
                outStream.on("finish", () => {
                    res({
                        encoding: file.encoding,
                        filename: file.filename,
                        mimetype: file.mimetype,
                        size: outStream.bytesWritten,
                        path: finalPath.replace(path.join(this.options.root), "")
                    });
                });
            })
        })
    }

    remove(name: string): Promise<void> {
        return new Promise((_, rej) => {
            fs.unlink(path.join(this.options.dir, name), rej);
            _();
        });
    }
}

export default class LocalStorage {
    private directory: Path;
    private options: Required<LocalStorageOptions>;

    private static global: LocalStorage;

    constructor(options: LocalStorageOptions) {
        if (!options.getFileName) {
            options.getFileName = getFileName;
        }

        if (!options.rootPath) {
            options.rootPath = process.cwd();
        }

        if (!options.directory) {
            options.directory = "uploads";
        }

        this.options = options as Required<typeof options>;

        this.directory = path.join(this.options.rootPath, this.options.directory);
        mkdirp.sync(this.directory);
    }

    store(name?: string): FileStore {
        const storeName = path.join(this.directory, name);
        return new FileStore({
            dir: storeName,
            root: this.options.rootPath,
            getName: this.options.getFileName
        });
    }

    getUrl(name: string): Path {
        const protocol = this.options.url.match(/^((http)?s*(\:+\/{2}))/);
        return [protocol[0], path.join(this.options.url.replace(/^((http)?s*(\:+\/{2}))/, ""), name)].join("");
    }

    static configure(options: LocalStorageOptions): void {
        this.global = new LocalStorage(options);
    }

    static getStore(name: string): FileStore {
        if (!this.global) {
            throw new Error("Global LocalStore has not been set");
        }

        return this.global.store(name);
    }

    static getUrl(filename: string): Path {
        if (!this.global) {
            throw new Error("Global LocalStore has not been set");
        }
        return this.global.getUrl(filename);
    }
}