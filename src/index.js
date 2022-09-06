const play = require("./play");
const { askQuestion1 } = require("./questions");

const start = () => {
  (() => console.log("\x1B[2J\x1B[0f"))();
  console.log("             Welcome to ShiFuMi\n\n\nPlease choose a move\n");
  askQuestion1();
  play();
};

start();
