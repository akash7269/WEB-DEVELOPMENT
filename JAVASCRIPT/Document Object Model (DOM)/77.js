// get multiple elements using getElements by class name 
// get multiple element items using querySelectorAll 

// const navItems = document.getElementsByClassName("nav-item");  HTMLCollection
// console.log(navItems[2]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));

const navItems = document.querySelectorAll(".nav-item"); //NodeList
console.log(navItems[1]); 