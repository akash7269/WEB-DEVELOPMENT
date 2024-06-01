// write a javascript function to get the first element of array. Passing a parameter 'n' will return the first 'n' element of the array.

// function retrieve(arr, n=1){
//     if(n <= arr.length){
//         for(var i=0;i<n;i++){
//             console.log(arr[i]);
//         }
//     }
//     else{
//         console.log(n + " to element nahi hai");
//     }
// }
// retrieve([1,2,3,4,5],4)

// Write a Javascript function to get the last element of an array. passing a parameter 'n' will return te last 'n' elements of the array.

function retrieve(arr, n=1){
    if(n <= arr.length){
        for(var i=0;i<n;i++){
            console.log(arr[arr.length-1-i]);
        }
    }
    else{
        console.log(n + " to element nahi hai");
    }
}
retrieve([1,2,3,4,5],3)