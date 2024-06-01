// function returning function 

function myFanc(){
    function hello(){
        return "Hello akash";
    }
    return hello;
}
const ans=myFanc();
console.log(ans());