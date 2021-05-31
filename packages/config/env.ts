import dotenv from "dotenv";
import parseVard from "dotenv-parse-variables";

export const isProdMode: boolean = process.env.NODE_ENV === "production";
const environment = dotenv.config({
    debug: isProdMode
});
if (environment.error) throw environment.error;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env: { [key: string]: any } = parseVard(environment.parsed);

export default env;
