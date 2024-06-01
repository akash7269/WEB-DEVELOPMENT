var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
// for(let i=1;i<=arr.length;i++){
//     sum+=i;
// }

for(let s of arr){
    sum+=s;
}
console.log(sum);

// print an array of numbers and strings, only add those numbers which are not strings 

var array = ["akash",12,"bhai",22,"hai",4,6];
var sum=0;

for(let i of array){
    if(typeof i === 'number'){
        sum+=i;
    }
}
console.log(sum);
