//stack memory is used in primitive datatypes 
let name = "ram"

let another = name
another = "shyam"

console.log(name);
console.log(another);
//In another takes value of name but after that repalce name thruogh the given String. 
//Means another replace the value of name  this proces is called a stack memory allocation

//Heap memory is happend in non primitive datatypes


let userOne = {
    email:"mail@goole.com" ,
    upi:"mail@ybl",

}
let userTwo = userOne
userTwo.email = "ram@mail.com"
console.log(userOne.email);
console.log(userTwo.email);
//changes happens in both userOne and userTwo
//heap memory take only referance from memory




