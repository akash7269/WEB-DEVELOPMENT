// little practice with click event 

// const button = document.querySelector("#one");
// button.addEventListener("click", function(){

//     button.style.backgroundColor = "yellow";
//     button.style.color = "gray";
// })

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length)
allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "red";
    })
})