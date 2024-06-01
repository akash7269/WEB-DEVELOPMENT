// Check the string is palindrom or not

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("");
    if(reversed===str) return true;
    else return false;
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("akash"));


function stringAlphaBeticalOrder(str){
    return str.split("").sort().join("");
}

console.log(stringAlphaBeticalOrder("akash"))