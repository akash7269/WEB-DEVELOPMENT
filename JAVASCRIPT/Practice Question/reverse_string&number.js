// Given a string, reverse each work in the sentence

// var string = "saare jaha se acha hindustan hamara";

// var savedStr = string.split()
//     .map((word)=>{
//         return word.split("").reverse().join("")
//     })
// console.log(savedStr.join(""));

// number

// function reverseKaro(num){
//     return Number(num.toString().split("").reverse().join(""));
// }

// console.log(reverseKaro(12));

// loop method 

function reverseKaro(num){
    var rev = 0;
    while(num>0){
        var rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseKaro(12346));