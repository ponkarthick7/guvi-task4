const numbers = [1, 2, 3, 4, 5];

function calculateSumWithLoop(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const sumWithLoop = calculateSumWithLoop(numbers);

console.log("Sum using loop:", sumWithLoop);
