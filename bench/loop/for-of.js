import { start } from "./@.js";

const array = [1, 2, 3, 4, 5, 6, 7];

start("for-of", () => {
  for (const iterator of array) {
    typeof iterator;
  }
});
