// get multiple elements using getElements by class name 
// get multiple element items using querySelectorAll 
// array like object ---> indexing, length property 

// const navItems = document.getElementsByTagName("a");
// console.log(navItems);

// we cant't use forEach method to iterate through HTMLCollection 
// simple for loop
// for of loop
// forEach 

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "red";
//     // navItem.style.fontWeight = "bold"
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "red";
//     navItem.style.fontWeight = "bold";
// }



let navItems = document.querySelectorAll("a");
for(let navItem of navItems){
    navItem.style.backgroundColor = "red";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}