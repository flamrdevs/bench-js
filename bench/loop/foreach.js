import { start } from "./@.js";

const array = [1, 2, 3, 4, 5, 6, 7];

start("foreach", () => {
  array.forEach((element) => {
    typeof element;
  });
});
