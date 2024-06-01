// event bubbling / event propogation 
// event capturing
// event delegation 
// console.log("hello world")

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events

// child.addEventListener("click",()=>{
//     console.log("captured !!!! child");
// }, true)
// parent.addEventListener("click",()=>{
//     console.log("captured !!!! parent");
// }, true)
// grandparent.addEventListener("click",()=>{
//     console.log("captured !!!! grandparent");
// }, true)
// document.body.addEventListener("click",()=>{
//     console.log("captured !!!! document.body");
// }, true)


// child.addEventListener("click",()=>{
//     console.log("you clicked child box");
// })
// parent.addEventListener("click",()=>{
//     console.log("you clicked parent box");
// })
// grandparent.addEventListener("click",()=>{
//     console.log("you clicked grandparent box");
// })
// document.body.addEventListener("click",()=>{
//     console.log("you clicked document.body box");
// })


// event delegation ###############

const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (e)=>{
    console.log(e.target);
})