const fibonacci = function(number) {
    number = Number(number);
    if(number < 0) return "OOPS";
    switch(number){
        case 0: return 0;
        case 1: return 1;
        default:
            return fibonacci(number - 1) + fibonacci(number - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
