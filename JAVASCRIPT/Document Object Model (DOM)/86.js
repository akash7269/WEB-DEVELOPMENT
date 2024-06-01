// intro to events 
// click 
// event add krne ke 3 tarike h 
// ye dusra hai 

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me !!!!!");
// }

// ye tisra method hai 

const btn = document.querySelector(".btn-headline");
// method --- addEventListener 
// function clickMe(){
//     console.log("you clicked me --->");
// }
btn.addEventListener("click",function(){
    console.log("you clicked me ....");
});