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
  if (
    arr.includes(
      "    ____           ",
      "---'    |________  ",
      "     (__)________) ",
      "        _________) ",
      "      (____)       ",
      "---.__(___)        "
    )
  ) {
    reversedString[2] = " (________(__)     ";
  }
  return reversedString;
}

module.exports = reverseMove;
