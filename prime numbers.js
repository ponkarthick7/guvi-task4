const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,21];

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeNumbers(array) {
  return array.filter(number => isPrime(number));
}

const primeNumbers = getPrimeNumbers(numbers);

console.log("Prime numbers:", primeNumbers);
