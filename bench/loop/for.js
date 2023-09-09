import { start } from "./@.js";

const array = [1, 2, 3, 4, 5, 6, 7];

start("for", () => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    typeof element;
  }
});
