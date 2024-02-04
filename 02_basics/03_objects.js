//In  js we can write js in two method  
//1. literals
//2.constract (in constract happens singleton)
 
// 1st method of writing object
//add symbol as a object key
let mysmbl = Symbol(" key1")
const user = {
    name: "krish",
    Email: "krish@google.com",
    age: "52",
    [mysmbl]: "key1",
   LAstLoggedIn:["Monday", "Friday"]
}
// console.log(user.Email); // This is not good way to declare a objects
// console.log(user["name"]);// another way to write code
// console.log(user[mysmbl]);

//how to change a value in object 
user.Email = "krish@Micro.com"
//console.log(user);

//Q:locked data in object 
//Object.freeze(user)
//Object on which to lock the attributes.
//Prevents the modification of existing property attributes and values, 
//and prevents the addition of new properties.


//using greeting in object key\
user.Greetingone = function(){
    console.log("Hello user");

}
//We have to use String Interpolation
user.GreetingTwo = function(){
    console.log(`hello ${this.name}`)
    
}
console.log(user.Greetingone());

console.log(user.GreetingTwo());
