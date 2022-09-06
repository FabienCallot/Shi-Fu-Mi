const { exit } = require("process");
const readline = require("readline");
const { askQuestion1, askQuestion2 } = require("./questions");
const { rock, paper, scissors } = require("./signs");
const reverseMove = require("./reverseMove");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const clear = () => console.log("\x1B[2J\x1B[0f");

let history = {
  victories: 0,
  defeats: 0,
  nulls: 0,
};

const playAgain = () => {
  reader.question("Do you want play again? Y / N\n", (answer) => {
    if (answer.toUpperCase() === "Y") {
      clear();
      console.log(
        `Victories : ${history.victories} / Defeats : ${history.defeats} / Ties games  : ${history.nulls}\n`
      );
      askQuestion1();
    } else if (answer.toLocaleUpperCase() === "N") {
      clear();
      console.log(
        `Victories : ${history.victories} / Defeats : ${history.defeats} / Ties games  : ${history.nulls}\n`
      );
      console.log("\n\n\n        Thank you ! Byeeee ❤️‍🔥\n\n\n");
      exit();
    } else {
      console.log("Please press 'Y' for yes ✅ or 'N' for leave the game ❌\n");
      playAgain();
    }
  });
};

const play = () => {
  reader.on("line", (move) => {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    const moveInt = Number(move);

    clear();

    // Player move
    if (moveInt === 1) {
      console.log("Player one\n");
      console.log(rock);
    } else if (moveInt === 2) {
      console.log("Player one\n");
      console.log(paper);
    } else if (moveInt === 3) {
      console.log("Player one\n");
      console.log(scissors);
    } else if (moveInt != 1 || moveInt != 2 || moveInt != 3 || isNaN(moveInt)) {
      console.log("invalid value !\n");
      askQuestion2();
      askQuestion1();
      return;
    }

    // Cpu random moove
    if (rndInt === 1 && !isNaN(moveInt > 0 && moveInt < 3)) {
      console.log("\nCpu move\n");
      console.log(reverseMove(rock));
    } else if (rndInt === 2 && !isNaN(moveInt > 0 && moveInt < 3)) {
      console.log("\nCpu move\n");
      console.log(reverseMove(paper));
    } else if (rndInt === 3 && !isNaN(moveInt > 0 && moveInt < 3)) {
      console.log("\nCpu move\n");
      console.log(reverseMove(scissors));
    } else {
      console.log("");
    }
    // Check result single round vs AI
    if (moveInt === rndInt) {
      console.log("equality ! Try again");
      history.nulls++;
      askQuestion1();
    } else if (moveInt === 1 && rndInt === 2) {
      console.log("You lost ! 😭");
      history.defeats++;
      playAgain();
    } else if (moveInt === 1 && rndInt === 3) {
      console.log("You won ! 🚀");
      history.victories++;
      playAgain();
    } else if (moveInt === 2 && rndInt === 1) {
      console.log("You won ! 🚀");
      history.victories++;
      playAgain();
    } else if (moveInt === 2 && rndInt === 3) {
      console.log("You lost ! 😭");
      history.defeats++;
      playAgain();
    } else if (moveInt === 3 && rndInt === 1) {
      console.log("You lost ! 😭");
      history.defeats++;
      playAgain();
    } else if (moveInt === 3 && rndInt === 2) {
      console.log("You won ! 🚀");
      history.victories++;
      playAgain();
    }
  });
};

module.exports = play;
