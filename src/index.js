const { exit } = require("process");
const readline = require("readline");
const { rock, paper, scissors } = require("./signs");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");

function reverseMove(arr) {
  let reversedString = [];
  arr.forEach((element) => {
    const splited = element.split("");
    const indexOfParenthesis1 = splited.indexOf(")");
    const indexOfParenthesis2 = splited.indexOf("(");
    if (indexOfParenthesis1 !== -1) {
      splited[indexOfParenthesis1] = "(";
    }
    if (indexOfParenthesis2 !== -1) {
      splited[indexOfParenthesis2] = ")";
    }
    const reversed = splited.reverse();
    const joined = reversed.join("");
    reversedString.push(joined);
  });
  if (arr === scissors) {
    reversedString[2] = " (________(__)     ";
  }
  return reversedString;
}

function askQuestion1() {
  console.log("Rock Paper Scissors? (press 1, 2 or 3)\n");
}
function askQuestion2() {
  console.log("Please press 1, 2 or 3 for play\n");
}
