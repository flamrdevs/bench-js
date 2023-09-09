import { start } from "./@.js";

const object_1 = { e1: 1, e2: 2, e3: 3, e4: 4, e5: 5, e6: 6, e7: 7 };
const object_2 = { e8: 8, e9: 9, e10: 10, e11: 11 };

start("spread", () => {
  const result = { ...object_1, ...object_2 };
  typeof result;
});
