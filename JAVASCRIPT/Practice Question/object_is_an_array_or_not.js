// How to check if an obhect is an array or not?
// Provide some code.

function checkArray(element) {
    return Array.isArray(element);
}
console.log(checkArray([]));
console.log(checkArray({}));