const body = document.body;
// console.log(body);
const button = document.querySelector("button");
// console.log(button);

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    // console.log(rgb);
    body.style.background = rgb;
}, 1000)
// console.log(intervalId);
button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
})