const my_hero = ["ram", "sam", "yam"]
const i_hero = ["krish", "rish", "dish"]
//console.log(my_hero);

/*
 my_hero.push(i_hero)
 console.log(my_hero);
// push add element like  array as a element. add array in a array */

const all_hero = my_hero.concat(i_hero)
console.log(all_hero);
// Additional arrays and/or items to add to the end of the array.
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const hero = [...my_hero, ...i_hero] //spreading array element in array
console.log(hero);
//using spread method is good because in concat we can add only 1 array but in spreading method 
// we can add more tham 1 array


const complex_arr = [1, 2, [3, 4, 5], 6 ,[7, [8, 9, 10]] ]
const depth_arr = complex_arr.flat(1)
const simple_arr = complex_arr.flat(2)
const easy = complex_arr.flat(Infinity)
console.log(depth_arr);
console.log(simple_arr);
console.log(easy);
// The flat() method is a copying method. It does not alter this but instead returns a 
//shallow copy that contains the same elements as the ones from the original array.

//++++++++++++++++++++++++ OPERATERS+++++++++++++++++++

console.log(Array.isArray("krish"));
//'.is array' prototype  is used to know : is it a array or not? {give as answer as a boolean type}

console.log(Array.from("krish"));
//'from' prototype is used to converts as a array
console.log(Array.from({name:"roni"}));// when  variable can't find it give as a empty arra


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
//A set of elements to include in the new array object.
//Returns a new array from a set of elements








