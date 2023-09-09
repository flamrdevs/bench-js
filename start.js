import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

/**
 *
 * @param {string} folder
 * @param {string[]} filenames
 * @returns
 */
const createEntry = (folder, filenames) => ({ folder, files: filenames.map((filename) => `${folder}/${filename}.js`) });

const entries = [
  createEntry("destructure", ["array-rest", "array", "object-rest", "object"]),
  createEntry("loop", ["for-in", "for-of", "for", "foreach"]),
  createEntry("object-assign", ["assign", "spread"]),
  createEntry("array-concat", ["concat", "spread"]),
];

/**
 *
 * @param {string} path
 * @returns
 */
const bench = (path) => `./bench/${path}`;

/**
 *
 * @param {string} path
 * @returns
 */
const result = (path) => `./result/${path}`;

/**
 *
 * @param {string} cmd
 * @returns
 */
const exe = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });

const start = async () => {
  const readme = ["# bench-js", "", "Benchmarking javascript", ""];

  readme.push(`Testing on ${new Date().toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric" })}`);
  readme.push("");

  try {
    await fs.access(path.resolve(process.cwd(), "result"));
  } catch (error) {
    await fs.mkdir("result");
  }

  for await (const { folder, files } of entries) {
    for await (const file of files) console.log(await exe(`node ${bench(file)}`));

    const sorted = Object.entries(JSON.parse(await fs.readFile(result(`${folder}.json`), "utf8"))).sort(([, a], [, b]) =>
      a < b ? 1 : a > b ? -1 : 0
    );

    readme.push(`## ${folder}`);
    readme.push("");

    const pad = 20;

    readme.push(`| ${"name".padEnd(pad)} | ${"ops/sec".padEnd(pad)} |`);
    readme.push(`| ${":---".padEnd(pad, "-")} | ${"------:".padStart(pad, "-")} |`);

    sorted.forEach(([key, value]) => readme.push(`| ${String(key).padEnd(pad)} | ${String(value).padStart(pad)} |`));

    readme.push("");
  }

  await fs.writeFile(path.resolve(process.cwd(), "README.md"), readme.join("\n"));
};

start();
