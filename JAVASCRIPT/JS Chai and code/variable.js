const accountId = 145234
let accountEmail = "akash@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// accountId = 2 not allowed

accountEmail = "dinda@gmail.com"
accountPassword = "2313312"
accountCity = "Prayagraj"

// prefer not to use var
// because of issue in block scope and element scope

console.table([accountId, accountEmail, accountPassword, accountCity]);