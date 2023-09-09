import { start } from "./@.js";

const object = { e1: 1, e2: 2, e3: 3, e4: 4, e5: 5, e6: 6, e7: 7 };

start("object", () => {
  const { e1, e2, e3, e4, e5, e6, e7 } = object;
  typeof e1, typeof e2, typeof e3, typeof e4, typeof e5, typeof e6, typeof e7;
});
