// event object 
const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
firstButton.addEventListener("click",function(event){
    // console.log("you clicked me ..")
    console.log(event);
})

// jab bhi kisi bhi element pe event listner add hoga 
// js Engine ---- line by line execute krta hai 
// browser ---- js Engine + extra features 
// browser ---- js Engine + webApi 

// jub browser ko pta chala ki user ne event perform kia 
// jo hum listen kar rhe hai
// browser ----- 2

// 1.) callback function hai vo js Engine ko degi.........
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega
// ye information hme ek object ke form me milegi

