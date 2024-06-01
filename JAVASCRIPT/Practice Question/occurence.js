function occ(str){
    var occurence ={};
    str.split("").forEach(function(elem){
        if(occurence.hasOwnProperty(elem) === false){
            occurence[elem] = 1;
        }
        else {
            occurence[elem]++;
        }
    })
    return occurence;
}

console.log(occ("akash"));
console.log(occ("rohit"));
console.log(occ("prayagraj"));