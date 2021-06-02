import { FileStoreOptions, FileStore, Path } from "./IFile";

export interface StorageOptions<T> extends FileStoreOptions<T> {
    baseUrl: string;
}

export interface Storage {
    config<T>(options: StorageOptions<T>): void;
    getFullPath(): Path;
    getBaseUrl(): string;
    getStore(name: string): FileStore;
    addStore(name: string, isPrivate?: boolean): FileStore;
    delStore(name: string): Promise<void>;
}

