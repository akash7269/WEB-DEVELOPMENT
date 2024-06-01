// Element.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach student </li>")
todoList.insertAdjacentHTML("afterbegin", "<li>Teach student </li>")