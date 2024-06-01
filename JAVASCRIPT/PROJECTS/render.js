import store from "./store.js";

function render() {
    // console.log(store);
    const todos = document.querySelector(".todos");
    todos.innerHTML = <h1>hello there</h1>
}

export default render;