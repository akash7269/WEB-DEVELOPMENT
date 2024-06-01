// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log("you clicked me...")
// })

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
// for(let allButton of allButtons){
//     allButton.addEventListener("click", function(){
//         console.log("you clicked me...");
//         console.log(this);
//         console.dir(this);
//         console.log(this.textContent);
//     })
// }

// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log("you clicked me...")
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log("you clicked me..");
    });
})