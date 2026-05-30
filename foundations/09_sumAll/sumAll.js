const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0) return "ERROR";
    if(number1 % 1 != 0 || number2 % 1 != 0) return "ERROR";
    if(typeof number1 == "string" || typeof number2 == "string") return "ERROR";

    let lowestNumber = number1 > number2 ? number2 : number1;
    let greaterNumber = number1 > number2 ? number1 : number2;
    let result = 0;
    while(lowestNumber <= greaterNumber ){
        result+=lowestNumber;
        lowestNumber++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
