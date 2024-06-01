// const user1={
//     firstName: "akash",
//     age: 8,
//     about: function(hobby, favMusician){
//         // console.log(this.firstName, this.age);
//         console.log(this.firstName, this.age, hobby, favMusician);
//     }
// }
// const user2 = {
//     firstName: "rohit",
//     age: 9,
// }

// user1.about();
// user1.about.call(user2, "guitar", "moazart");


// call ################
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1={
    firstName: "akash",
    age: 8,
}
const user2={
    firstName: "rohit",
    age: 9,
}

about.call(user1, "guitar", "moazart");

// apply ##############
about.apply(user2, ["guitar", "pritam"])

// bind ##########
// bind return krta hai 
const func = about.bind(user1,"guitar", "bach");
func();