// ...existing code...
const accountId = 1234    //its a constant, it means is has fix value
let accountEmail = "shanky12@google.com"  // its a variable, its value can be changed
//let is RECOMMENDED to use for variables

var accountPassword = "11223344"
//var is OLD way to declare variables, its not is use beacause there is no proper scoping with var
//but still you can use it  
accountCity = "Prayagraj"   // it is a GLOBAL variable, its value can be changed

console.log(accountId);


console.table({ accountId, accountEmail, accountPassword, accountCity })
//both the brackets are important for console.table to work