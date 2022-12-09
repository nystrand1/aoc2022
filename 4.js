const { readFileLineByLine } = require("./utils");


const contents = readFileLineByLine("./input4.txt");


const fullSubSet = ([firstA, lastA], [firstB, lastB]) => {
  return (firstA >= firstB && lastA <= lastB) || (firstA <= firstB && lastA >= lastB)
}

const pairs = contents.map((x) => {
  const pair = x.split(',').map(y => y.split('-').map(x => parseInt(x)));
  return pair;
})

console.log(pairs.filter(([a,b]) => fullSubSet(a, b)).length);


// Part 2

const subSet = ([firstA, lastA], [firstB, lastB]) => {
  if (firstA >= firstB && lastB >= firstA) return true;

  if (firstB >= firstA && lastA >= firstB) return true;

  return false;
}
console.log(pairs.filter(([a,b]) => subSet(a, b)).length);
