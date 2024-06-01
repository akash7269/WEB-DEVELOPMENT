function cloneArr(arr){
    return arr.map(function(e){
        return e;
    })
}

var newarr = cloneArr([1,2,3,4,5]);
console.log(newarr);