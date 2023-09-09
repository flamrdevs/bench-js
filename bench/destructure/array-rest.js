import { start } from "./@.js";

const array = [1, 2, 3, 4, 5, 6, 7];

start("array-rest", () => {
  const [e1, e2, ...rest] = array;
  typeof e1, typeof e2, typeof rest;
});
