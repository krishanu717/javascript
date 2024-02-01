const score = 545
console.log(score);

const balance = new Number(10000)
console.log(balance);
// store value in object

const querry = new Number(82288255)
console.log(querry.toString());// convert  number to string 

console.log(querry.toPrecision()); // get precise value

console.log(querry.toFixed());// get round off value

console.log(querry.toLocaleString('en-IN'));

//++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++//
/*
console.log(Math);

console.log(Math.abs(-5));//A numeric expression for which the absolute value is needed.

console.log(Math.ceil(7.1)); //if any small ammount increses print the next integer

console.log(Math.round(4.14)); //give us round value

console.log(Math.floor(4.99)); //Only takes the front 

*/

//importantpart
//*******************[PAY ATTENTION]********************************

console.log(Math.min(1, 5, 1, 4, 1));//use to print minimal data   
console.log(Math.max(1, 5, 1, 4, 1));//use to print maximum data

console.log(Math.random()); // print value in randomly 0 to 1 

console.log( (Math.round(Math.random() * 10  + 1) ) );

const min = 16 
const max = 20
let x = 4
// x  value should be (max - min) value(note)

//PRINT ANY RAMDOM 10 TO 20
 
console.log( (Math.round(Math.random() * x + 16) ) );
