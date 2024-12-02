import fs from "fs";
import readline from "readline";

export const readByLine = (path: string) => {
  const stream = fs.createReadStream(path);
  const readLine = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  return new Promise<string[]>((resolve) => {
    const lines: string[] = [];
    readLine.on("line", (v) => lines.push(v));
    readLine.on("close", () => resolve(lines));
  });
}