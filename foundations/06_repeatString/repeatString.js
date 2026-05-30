const repeatString = function(string, numberOfRepeatString) {
    let result = "";
    if(numberOfRepeatString < 0) return "ERROR";
    while(numberOfRepeatString > 0){
        result+=string;
        numberOfRepeatString--;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
