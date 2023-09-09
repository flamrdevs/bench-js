import fs, { constants } from "node:fs/promises";
import path from "node:path";

/**
 *
 * @param {string} filename
 * @param {string} key
 * @param {number} value
 */
const json = async (filename, key, value) => {
  const target = path.resolve(process.cwd(), `result/${filename}.json`);

  let content = {};

  const read = async () => JSON.parse(await fs.readFile(target, "utf8"));

  const write = async (json) => await fs.writeFile(target, JSON.stringify(json, null, 2), "utf8");

  try {
    await fs.access(target, constants.R_OK | constants.W_OK);
    content = await read();
  } catch (error) {
    await write({});
  }

  content[key] = value;

  await write(content);
};

const ITERATIONS = 99_999;

/**
 *
 * @param {VoidFunction} callback
 * @param {number} iterations
 * @returns
 */
const ops = (callback, iterations = ITERATIONS) => {
  const startTime = performance.now();

  for (let i = 0; i < iterations; i++) callback();

  const endTime = performance.now();

  return Number(Math.floor(iterations / ((endTime - startTime) / 1000)).toFixed(0));
};

/**
 *
 * @param {string} filename
 * @param {string} key
 * @param {VoidFunction} callback
 */
const run = async (filename, key, callback) => {
  await json(filename, key, ops(callback));
  console.log(`${filename} | ${key}`);
};

export default run;
