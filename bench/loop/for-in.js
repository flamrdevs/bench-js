import { start } from "./@.js";

const object = { e1: 1, e2: 2, e3: 3, e4: 4, e5: 5, e6: 6, e7: 7 };

start("for-in", () => {
  for (const key in object) {
    typeof key;
  }
});
