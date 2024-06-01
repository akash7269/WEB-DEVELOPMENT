// document.createElement() 
// append
// prepend 
// remove 

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach student")
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText)
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

const todo1 = document.querySelector('.todo-list li');
todo1.remove();
console.log(todo1);

