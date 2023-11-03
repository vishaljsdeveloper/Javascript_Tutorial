//TYPE CONVERSION AND TYPE COERCION
//Type Conversion is used to convert one data type into another data type
//we use String() function to convert any data type into string.
let myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));
let date = String(new Date());
console.log(date, (typeof date));
let arr = String([1, 3, 5, 7, 9]);
console.log(arr, (typeof arr));
console.log(arr.length);//length of string=no. of character that is 9 while length of array=no. of element i.e 5
// we can also convert all data type into string using "toString()"
let i = 8;
console.log(i.toString());
console.log(typeof i.toString());
let j = false;
console.log(j.toString());
console.log(typeof j.toString());

//all data type can be converted like this
//just like String() function, we have a Number() function which is used to convert all data type into number.
let stri = Number("3434");
console.log(stri, (typeof stri));
let str = Number(true);
console.log(str, (typeof str));
let st = Number([1, 2, 3, 4]);
console.log(st, (typeof st));//output= NaN(not a number) , number
//we can also parseInt() and parseFloat() to convert all data type into number.
let num = parseInt("34.346");
console.log(num, (typeof num))//34 , number. it will ignore the decimal part
let no = parseFloat(34.546);
console.log(no, (typeof no));
//we can use another function toFixed() with parseFloat() function to show exact number that we want to see after decimal.
let nu = parseFloat(36.6678);
console.log(nu.toFixed(), (typeof nu));//it will only show the integer part
console.log(nu.toFixed(3), (typeof nu));//it will show decimal upto 3 
//TYPE COERCION = jor jabardasti
let myStr = "698";
let myNum = 35;
console.log(myStr + myNum);//69835  . when we add string with a number then it will concatinate. we cant add it 
let num1 = 34;
let num2 = 36;
console.log(num1 + num2);
