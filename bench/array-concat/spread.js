import { start } from "./@.js";

const array_1 = [1, 2, 3, 4, 5, 6, 7];
const array_2 = [8, 9, 10, 11];

start("spread", () => {
  const result = [...array_1, ...array_2];
  typeof result;
});
