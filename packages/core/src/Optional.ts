export type Optional<T, U extends keyof T> = Omit<T, keyof U> &
    {
        [U in keyof T]?: T[U]
    }
