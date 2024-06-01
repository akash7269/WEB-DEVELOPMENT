// callbacks, callback hell, pyramid of doom 
// asynchronous programming 

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
setTimeout(() =>{
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
    setTimeout(() =>{
        heading2.textContent = "Heading 1";
        heading2.style.color = "red";
    }, 1000);
}, 1000)