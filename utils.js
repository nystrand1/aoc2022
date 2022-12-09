const {readFileSync} = require('fs');

const readFileLineByLine = (fileName) => {
  const contents = readFileSync(fileName, 'utf-8');
  return contents.split(/\r?\n/);
}

module.exports = {
  readFileLineByLine
}