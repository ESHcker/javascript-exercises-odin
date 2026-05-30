const removeFromArray = function(array, elementToDel) {
    for (index = 1; index < arguments.length; index++) {
        elementToDel = arguments[index];
        console.log(elementToDel);
        let hasElementToDel = array.findIndex(element => element === elementToDel);
        while(hasElementToDel != -1){
            array.splice(hasElementToDel, 1);
            hasElementToDel = array.findIndex(element => element === elementToDel);
        }
    }  
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
