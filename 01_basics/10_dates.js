let myDate = new Date () 
console.log(myDate);

console.log(typeof myDate);

console.log(myDate.toString() ); //to get date in days and month

console.log(myDate.toISOString() );// to get date and iso time
 
console.log(myDate.toJSON() ); // same like to.ISOString()

console.log(myDate.toDateString()); //same as .toString()

console.log(myDate.getDate()); //use to get date


let date = new Date(2024, 0 , 31) // this is how we write data in javascript
console.log(date);

let myTimeStamp = Date.now()
console.log(myTimeStamp); //gives value in millseconds since  1st jan 1970

console.log(date.getTime() ); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
 //converts in second
 console.log(Math.round(Date.now()/1000 ) ); //use for get exact value betwee to compitation
 
 