function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("Hi You Called me");
            counter++;
        }
        else{
            console.log("Mai already ek baar call ho chuka hu");
        }
    }
}
const myFunc = func();
myFunc();
myFunc();
myFunc();