// function inside function

function app(){
    const myFunc=() => {
        console.log("hello from my Fanc");
    }

    function twoNum(num1, num2){
        return num1+num2;
    }

    const mul=(num1, num2) => num1*num2;

    console.log("inside app");
    myFunc();
    console.log(twoNum(3,5));
    console.log(mul(3, 4));
}
app();