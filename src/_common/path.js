import { resolve } from "node:path";

const __mainPath = process.cwd();

const __cmsPublicPath = resolve(__mainPath, "../", "strapi-base", "public");

export { __mainPath, __cmsPublicPath };
