const myarr = [0, 1, 2, 3, 4, 5] //way to write array in js

/*
console.log(myarr);

console.log(myarr.length); // use to print length of array
console.log(myarr[0]); // use to print  index of array

const myarrB = new Array(1, 2, 3, 4) // array writing methods
 
console.log(myarrB);
*/

//+++++++++++++ARRAY METHODS+++++++++++++++

myarr.push(6) // use to oush data as a last element 
console.log(myarr);

myarr.unshift(7)
console.log(myarr); // use to push data as a first element

myarr.shift() // remove unshift element which added in array
console.log(myarr);

myarr.pop()
console.log(myarr); // remove last push value

console.log(myarr.includes(9)); //this use to asking question get answer as boolean type 
console.log(myarr.indexOf(11)); // if false then print -1 or if right print that number 

