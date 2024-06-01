const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB calls, cryptography, network 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

// ########### data comsumption #######

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "akash", email: "aka@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "akash", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolve or rejected"))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "dinda", password: "72690"})
        } else {
            reject('ERROR: Javascript something went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()