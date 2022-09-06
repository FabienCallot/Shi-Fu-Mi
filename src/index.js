const { exit } = require("process");
const readline = require("readline");
const { askQuestion1, askQuestion2 } = require("./questions");
const reverseMove = require("./reverseMove");
const { rock, paper, scissors } = require("./signs");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");
