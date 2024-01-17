let score = "33abc"//when using "" its define as a string

//  console.log(score);
//  console.log(typeof score);

let valueinNumber = Number(score)
console.log(valueinNumber );
//print: NaN (means not a number)
console.log(typeof valueinNumber);
//String to boolean conversation
// example 1
let person = "krish"
console.log(person);
console.log(typeof person);

let personLoggedIn = Boolean(person)
console.log(personLoggedIn);
//example2
let city = ""
let location = Boolean(city)
console.log(location);
console.log(typeof location);

//number to sting convert
let phoneNo = 58422702
console.log(phoneNo);
console.log(typeof phoneNo);
let valuedInString = String(phoneNo)
console.log(valuedInString);
console.log(typeof valuedInString);


/*
notes: 

"33"=>33
"33gg"=>NaN
"value"=> true
""=>false

*/
