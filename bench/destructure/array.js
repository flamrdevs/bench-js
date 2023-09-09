import { start } from "./@.js";

const array = [1, 2, 3, 4, 5, 6, 7];

start("array", () => {
  const [e1, e2, e3, e4, e5, e6, e7] = array;
  typeof e1, typeof e2, typeof e3, typeof e4, typeof e5, typeof e6, typeof e7;
});
