// callback functions

// function myFanc(callback){
//     // console.log(a);
//     console.log("hello there I am a func and I can..")
//     callback();
//     // console.log("hello world");
// }

// function myFanc2(){
//     console.log("inside my fanc 2");
// }

// myFanc(myFanc2);


function myFanc2(name){
    console.log("inside my fanc 2");
    console.log(`your name is ${name}`);
}

function myFanc(callback){
    console.log("hello there I am a fanc and I can..");
    callback("akash");
}

myFanc(myFanc2);