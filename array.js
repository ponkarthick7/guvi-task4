const stringArray = ["hello world", "programming is fun", "java script"];

function convertToTitleCase(str) {
  return str.replace(/\b\w/g, match => match.toUpperCase());
}

function convertArrayToTitleCase(array) {
  return array.map(convertToTitleCase);
}

const titleCaseArray = convertArrayToTitleCase(stringArray);

console.log(titleCaseArray);


