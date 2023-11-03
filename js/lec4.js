//DATA TYPE IN JAVASCRIPT
/*1.PRIMITIVE DATA TYPE:
STRING , BOOLEAN , NUMBER , null , undefined , symbol.
2.REFERENCE DATA TYPE :
arrays, object literals , functions , date etc */

/*typeof is an operator.
typeof of reference data type is always an object except function. typeof of function is function.
null is  a primitive data type but its typeof is object. */
//STRING:-
let name = 'vishal';
console.log("my string is " + name);
console.log("data type is " + (typeof name));
//Number
let marks = 35;
console.log("the marks is " + marks);
console.log("data type is " + (typeof marks));
//Boolean
let knowsDriving = true;
console.log("he knows driving =" + knowsDriving);
console.log("data type is " + (typeof knowsDriving));
//null
let nullVar = null;
console.log("the value is " + nullVar);
console.log("data type is " + (typeof nullVar));
//undefined:-
let undef = undefined;
console.log("this is " + undef);
console.log("data type is " + (typeof undef));
let res;
console.log("data type is " + (typeof res));
//REFERENCE DATA TYPE:-
//ARRAY
let myarr = [1, 2, 3, false, "stri"];
console.log("this is an array " + myarr);
console.log("data type is " + (typeof myarr));
//object literals
let stMarks = {
    hari: 34,
    vishal: 56,
    RohanDas: 64
}
//console.log("the object is "+ stMarks);//this is error because this is not the way to access object
console.log("the object is ", stMarks);//we can use this
console.log(stMarks);//we can also use this
console.log("data type is " + (typeof stMarks));
//functions
var x = myFunction(4, 6);
document.getElementById("sar").innerHTML = x;
function myFunction(a, b) {
    return a * b

}
console.log("data type is " + (typeof myFunction));
//DATE
let date = new Date();
console.log(date);
console.log(typeof date);//if not using any string then no need to give another bracket