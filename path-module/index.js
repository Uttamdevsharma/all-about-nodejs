import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

console.log("Basename:", path.basename("/foo/bar/baz/asdf/index.html"))