const { readFileLineByLine } = require("./utils");

const priorityHash = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
}

const contents = readFileLineByLine('input3.txt');

let sum = 0;
contents.forEach((x) => {
  const middleIndex = (x.length / 2);
  const firstCompartment = x.slice(0, middleIndex);
  const secondCompartment = x.slice(middleIndex);
  const commonItems = new Set([]);
  firstCompartment.split("").forEach((x) => {
    if (secondCompartment.includes(x)) {
      commonItems.add(x)
    }
  })
  commonItems.forEach((x) => sum += priorityHash[x])

})

//console.log(sum)


// part 2
const chunksOfThree = [];
for (let i = 0; i < contents.length; i += 3) {
  const chunk = contents.slice(i, i + 3);
  chunksOfThree.push(chunk);
}
let badgeSum = 0;
chunksOfThree.forEach((chunk) => {
  const [first, second, third] = chunk;
  const commonItems = new Set([]);
  first.split("").forEach(x => {
    if (second.includes(x) && third.includes(x)) {
      commonItems.add(x);
    }
  })
  commonItems.forEach((x) => badgeSum += priorityHash[x])
});

console.log(badgeSum)