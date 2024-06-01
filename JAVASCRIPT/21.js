// function.....

// function declaration ################
// function singhHappyBirthday(){
//     console.log("happy birthday to you...");
// }

// function expression #############
const singhHappyBirthday=function(){
    console.log("happy birthday to you...")
}
singhHappyBirthday();

function addNumber(){
    console.log(23+34);
}

// singhHappyBirthday();
addNumber();

function sumTwoNumber(a, b){
    return a+b;
}

const returnValue=sumTwoNumber(22, 33);
console.log(returnValue);

function firstChar(anyString){
    return anyString[[0]]
}
console.log(firstChar("akash"));


function findTarget(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray=[1,3,9,25];
const ans=findTarget(myArray, 1);
console.log(ans);