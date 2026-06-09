const palindromes = function (phrase) {
    const cleanString = phrase
     .toLowerCase()
     .replace(/[\s_¡¿!.',/:;?()-]/g , "");
    
    const phraseReversed = cleanString.split("").reverse().join("");
    return cleanString === phraseReversed;
}

// Do not edit below this line
module.exports = palindromes;
