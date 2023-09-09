import run from "../libs.js";

/**
 *
 * @param {string} key
 * @param {VoidFunction} fn
 */
export const start = (key, fn) => {
  run("array-concat", key, fn);
};
