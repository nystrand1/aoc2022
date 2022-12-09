const {readFileSync} = require('fs');


const contents = readFileSync('./input1.txt', 'utf-8');


const elves = {};

let elvesIndex = 0;
contents.split(/\r?\n/).forEach((content) => {
  if (content === '') {
    elvesIndex++;
  }
  else if (!elves[elvesIndex]) {
    elves[elvesIndex] = {
      items: [],
      total: 0
    }
    elves[elvesIndex].items.push(parseInt(content))
    elves[elvesIndex].total += parseInt(content);
  } else {
    elves[elvesIndex].items.push(parseInt(content))
    elves[elvesIndex].total += parseInt(content);
  }
})

let mostCalorieElf = 0;
let mostCalorieElfIndex = 0;

Object.values(elves).forEach(({total}, index) => {
  if (total > mostCalorieElf) {
    mostCalorieElf = total;
    mostCalorieElfIndex = index
  }
})

// console.log(mostCalorieElf)
// console.log(mostCalorieElfIndex)


// part 2


const calorieArray = Object.values(elves).map((({total}) => total))
const sorted = calorieArray.sort((a, b) => a - b).reverse();
let val = 0;
sorted.slice(0, 3).forEach(x => val += x)
console.log(val);