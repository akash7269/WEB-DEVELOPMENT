// sort methods

const numbers = [1,56,45,5,450,1200];
// numbers.sort();

// numbers.sort((a,b) =>{
//     return a-b;
// });

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

const product = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3200},
    {productId: 3, productName: "p3", price: 500},
    {productId: 4, productName: "p4", price: 100},
    {productId: 5, productName: "p5", price: 700},
]
// product.sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(product);

const lowToHigh = product.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
const highToLow = product.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(lowToHigh)
console.log(highToLow)