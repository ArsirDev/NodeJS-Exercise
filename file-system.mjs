import fs from "fs";
import fs_promise from "fs/promises";

// Read File and Write File using File-system Syncronous

const bufferSync = fs.readFileSync("file-system.mjs");

console.info(bufferSync.toString());

fs.writeFileSync("tempSync.txt","Hello world");


// Read file and write file using file-system Promise

const buffer = await fs_promise.readFile("file-system.mjs");

console.info(buffer.toString());

await fs_promise.writeFile("tempPromise.txt", "Hello World");
