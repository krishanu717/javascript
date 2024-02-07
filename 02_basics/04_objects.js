//Today we will talk about singlton way to write object
const Fbuser = {}
Fbuser.id = "123abdc"
Fbuser.name = "Ram"
Fbuser.email = "ram@gmail.com"
 console.log(Fbuser);
 // this is the process of writing singleton

 const myObj = {
    email:"ray@gmail.com",
 Fullname:{
    userfullname:{
        Fname:"Roy ",
        Lname:"Mohan"
    }
       } 
          }
          console.log(myObj.Fullname.userfullname.Fname);
          // we have to give specific location to get right info

          //marged two object

          const obj1 = {a:1, b:2}
          const obj2 = {c:3, d:4}
          const obj3 = {e:5, f:6}
         
         
 const obj =  Object.assign({} ,obj1, obj2, obj3)
 console.log(obj);
 //The first source object from which to copy properties.
// thats why we are using {} otherwise its gonna aasgin all the value obj 1


//using spread for merged the object

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj3);

// getting values from database 
 
