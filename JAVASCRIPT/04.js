// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName="   akash   ";
// let firstName="akash";

console.log(firstName.length);
firstName=firstName.trim();
console.log(firstName)
console.log(firstName.length);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// start index
// end index

let newString=firstName.slice(0,4);
console.log(newString);