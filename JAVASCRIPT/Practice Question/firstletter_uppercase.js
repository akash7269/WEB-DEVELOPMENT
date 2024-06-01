// akash bhai kaise ho
// Akash Bhai Kaise Ho 

function capitalizeKaro(str){
    var allWord = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase()+word.substring(1)
    }) 
    return allWord.join(" ");
}

console.log(capitalizeKaro("akash bhai kaise ho"));
console.log(capitalizeKaro("mujhe vo achhi lgti hai"));