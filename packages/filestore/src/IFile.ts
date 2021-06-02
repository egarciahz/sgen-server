import { FileUpload } from 'graphql-upload'

export type Path = string

export type GetPath<F> = (file?: F) => Promise<Path>

type FileMeta = {
    size: number
    path: Path
}

export type File = FileMeta &
    FileUpload & {
        id: number | string
    }

export type FileUploaded = FileMeta & Omit<FileUpload, 'createReadStream'>

export type FileStoreOptions<T> = {
    name: string
    rootPath: Path
    makeFileName?: GetPath<T>
}

export type FileStoreQuery = {
    id?: string | number
    name?: string
}

export interface FileStore {
    save(file: FileUpload): Promise<FileUploaded>
    update(file: FileUpload): Promise<FileUploaded>
    get(query: FileStoreQuery): Promise<File>
    remove(query: FileStoreQuery): Promise<{ id: string | number }>
}
