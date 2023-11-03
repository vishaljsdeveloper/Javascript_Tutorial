console.log('welcome to lec3 of js that is variable in js');
/* there are 3 keywords in javascript to declare a variable. they are 1. var 2. let 3. const .
declaration of variable :
var name
let name
const name
in the above example variable is declared but we did not assigned any value to it*/
var name='vishal'; // variable is declared and value is also assigned to it.
var channel;
var marks=342;//if we use quote with integer then it will become a string
console.log(name, channel, marks);
/* Rule for creating variable in JS :-
1. can't start with numbers.
2. can start with letters,underscore(-) and dollars($).
3. variable names are case sensitive
NOTE:-
never use underscore or dollar at start while
declaring variable names. it is valid but dont use because underscore is used as a private variable in object oriented javascript and dollar is used for variable declaration in php. so avoid it to avoid confusion*/
//About const:-
const ownersName ='hari';
//ownersName='ravi';// cant do this , it is an error.cant change the value
console.log(ownersName);
//const nazi  ;//cant do this error. we must assign a value to it
//when we use const variable then we must assign a value to it and also we cant change the value of declared variable on the other hand it is possible when we use var or let

//About let:-
//let has  Block level scope where as Var has global scope
var city='delhi';
console.log(city);
{
    let city='hajipur';
    console.log(city);
    city='kolkata';
    console.log(city);
}
console.log(city);
//we cant change the value of variable when use const but we can perform functions of array or object
const arr1=[12, 23, 22 ,32];
console.log(arr1);
arr1.push(44);
console.log(arr1);
//arr1=[50,25.63];//we cant redeclare the array.error.
/*most common programming case type:

1.camelCase
2.kebab-case
3.snake_case
4.PascalCase*/