export default function normalizePort(port: string): number {
    const value: number = parseInt(port, 10);

    if (!isNaN(value)) {
        return value;
    }

    if (value >= 0) {
        return value;
    }

    throw new Error(`Invalid Argument port: [${port}]`);
}
