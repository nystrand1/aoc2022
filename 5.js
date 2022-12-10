const { readFileLineByLine } = require("./utils");

const contents = readFileLineByLine("./input5.txt");

contents.splice(0, 10);

let inputStart = [
  ['V', 'C', 'W', 'L', 'R', 'M', 'F', 'Q'],
  ['L', 'Q', 'D'],
  ['B', 'N', 'C', 'W', 'G', 'R', 'S', 'P'],
  ['G', 'Q', 'B', 'H', 'D', 'C', 'L'],
  ['S', 'Z', 'F', 'L', 'G', 'V'],
  ['P', 'N', 'G', 'D'],
  ['W', 'C', 'F', 'V', 'P', 'Z', 'D'],
  ['S', 'M', 'D', 'P', 'C'],
  ['C', 'P', 'M', 'V', 'T', 'W', 'N', 'Z']
];

const makeMove = (move, from, to) => {
  const movedCrates = inputStart[from - 1].splice(0, move);
  // remove .reverse() to solve for part 2
  inputStart[to-1] = [...movedCrates].reverse().concat(inputStart[to - 1])
  console.log(inputStart);
}

contents.forEach((line) => {
  const formattedLine = line.replaceAll('move ', '').replaceAll('from ', '').replaceAll('to ', '')
  const [move, from, to] = formattedLine.split(' ')
  makeMove(parseInt(move), parseInt(from), parseInt(to))
});

console.log(inputStart.map(x => x[0]).join(''));
