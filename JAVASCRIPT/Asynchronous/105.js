// understand callback 

// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// function myFunc2(){
//     console.log("Function is doing task 2");
// }
// myFunc(() => {
//     console.log("Function is doing task 2")
// });



function getTwoNumberAndAdd(number1, number2, callback){
    if(typeof number1 === "number" && typeof number2 === "number"){
        callback(number1, number2);
    }
    else{
        console.log("Wrong Data type")
    }
}
function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
getTwoNumberAndAdd(5, 6, addTwoNumber);
getTwoNumberAndAdd("5", "6", addTwoNumber);
