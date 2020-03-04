const fs = require('fs');

const readFile = fileName => fs.readFileSync(fileName, 'utf8');

const getLines = csvData => {
  return csvData
    .split('\n')
    .map(line => line.split(','));
}

module.exports = function parseCSVToArr(fileName) {
  const csvData = readFile(fileName);
  let [columns, ...records] = getLines(csvData);
  return records;
};
