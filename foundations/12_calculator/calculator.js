const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(arrayNumbers) {
	return arrayNumbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function(arrayNumbers) {
return arrayNumbers.reduce((sum, number) => sum * number, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  if(number === 1 || number === 0) return 1;
  if(number >= 2){
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
