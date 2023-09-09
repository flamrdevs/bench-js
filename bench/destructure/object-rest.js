import { start } from "./@.js";

const object = { e1: 1, e2: 2, e3: 3, e4: 4, e5: 5, e6: 6, e7: 7 };

start("object-rest", () => {
  const { e1, e2, ...rest } = object;
  typeof e1, typeof e2, typeof rest;
});
