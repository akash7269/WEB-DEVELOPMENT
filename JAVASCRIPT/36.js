// some methods
// kya aisa ek bhi number hai jo even hai 
// agr h to TRUE print krega

// const numbers = [3,5,8,9];

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "Tv", price: 15000},
]

const ans = userCart.some((cartItem)=>cartItem.price>100000);
console.log(ans);