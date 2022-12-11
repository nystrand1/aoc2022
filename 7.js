const { readFileLineByLine } = require('./utils');

const contents = readFileLineByLine('./input7.txt');

const currentSizes = [];
const allSizes = [];

contents.forEach((line) => {
  const [cmd, cmd2, cmd3] = line.split(' ');
  if (cmd === '$' && cmd2 === 'cd') {
   if (cmd3 === '..') {
     const size = currentSizes.pop();
     allSizes.push(size);
     currentSizes[currentSizes.length - 1] += size;
   } else {
    currentSizes.push(0);
   }
  }

  if (!isNaN(cmd)) {
    currentSizes[currentSizes.length - 1] += parseInt(cmd);
  }
});

const sum = allSizes.concat(currentSizes.reverse()).reduce((acc, curr) => {
  if (curr < 100000) {
    return acc += curr
  }
  return acc}, 0);

console.log(sum);

// Part 2
const sizes = allSizes.concat(currentSizes.reverse());

const totalSize = Math.max(...sizes);
const qualifiedSizes = sizes.filter(x => (70000000 - totalSize + x) >= 30000000)
console.log(Math.min(...qualifiedSizes));
