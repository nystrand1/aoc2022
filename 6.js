const { readFileLineByLine } = require('./utils');

const contents = readFileLineByLine('./input6.txt');


const setSize = 4; // 14 for part 2

const parseLine = (line) => {

  for (let i = 0; i < line.length; i++) {
    const set = new Set(line.slice(i, i + setSize));
    console.log(set)
    if (set.size === setSize) {
      console.log(i + set.size)
      return;
    }
  }
}

parseLine(contents[0]);
