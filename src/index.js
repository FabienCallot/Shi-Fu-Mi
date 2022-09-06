const { exit } = require("process");
const readline = require("readline");
const reverseMove = require("./reverseMove");
const { rock, paper, scissors } = require("./signs");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");

const test = reverseMove(scissors);
console.log(test);
function askQuestion1() {
  console.log("Rock Paper Scissors? (press 1, 2 or 3)\n");
}
function askQuestion2() {
  console.log("Please press 1, 2 or 3 for play\n");
}
