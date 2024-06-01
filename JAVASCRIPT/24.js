// lexical scope 
const myVar = "value1";

function myApp(){
    // const myVar = "value1";
    function myFunc(){
        // const myVar= "value45";
        console.log("inside myFunc", myVar);

    }
        console.log(myVar);
        myFunc();
}
myApp();