// nested destructuring

const users = [
    {userId: 1, firstName: 'akash', gender: 'male'},
    {userId: 2, firstName: 'rohit', gender: 'male'},
    {userId: 3, firstName: 'sachin', gender: 'male'},
]

// const [user1, user2, user3]=users;
// console.log(user1);
// console.log(user2);

const [{firstName: user1firstName}, , {gender}]=users;
console.log(user1firstName);
console.log(gender);