function name() {
// console.log("R");
// console.log("A");
// console.log("M");
}
name() //Basic way to execute the function

function add(number1 , number2) {
   
    let result = number1 + number2
    return result //result will trasnefer the retun value and print
//after return written code is used as a unreachable code

   //console.log(add(3 ,5)); // undefined
    
}
 const result = add(3 , 4)
// console.log(result);

 
 function yog(number3 , number4) {

    return  number3 + number4 //Easy way two write retuned value
}

const fal = yog(4, 5)
//console.log(fal);

function User(logged) {
    if(logged === undefined){
        console.log("please enter username");
        return;
    }
    return`${logged} just log in` 
}
console.log(User());


function Use(log) {
    if(!log ){
        console.log("please enter username");
        return;
    }
    return`${log} just logged in` 
}
console.log(Use("k"));

//log === undefined OR !log are same  

