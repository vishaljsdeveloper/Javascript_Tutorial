//Conditional statements and Switches in javascript:
//if-else
const age=19;
if(age==19){
    console.log('age is 19');
}
else{
    console.log('age is not 19');
}
// the difference between else if and if-if is that if-if will check all the condition even getting one condition true and in else-if it will exit after one condition is true.
//note:- == only checks value ,, === checks value as well as data type. != checks only value,, !==checks value as well as data type.
//use of if-if for checking more condition even after fullfilling one condition
const age1=65;
if(age1!=19){
    console.log('age is not 19');
}
if(age1===65){
    console.log('age is 65');
}
else{
    console.log('age is neither 19 nor 65');
}
//ex
if(typeof vari!=='undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
 //ex
 const doesDrive=false; // automatic takes the value in if statement
 if(doesDrive){
     console.log("you can drive");
 }
 else{
     console.log("you cant drive");
 }
 //ex
 if(doesDrive && age>18){
     console.log('you can drive');
 }
 else{
     console.log('you cant drive');
 }
 //ternary operator: shorthad for if-else statement
 age2=45;
 console.log(age2==45?"print it if condition is true": 'print it if condition is not true');

 //switch case:-
 const age3=22;
 switch(age3){
     case 18:
        console.log('age is 18');
        break;
     case 22: console.log('you are 22');
     break;
     case 38:
         console.log('you are 38');
         break;
    default:
        console.log("age did not match");
 }
 //note:- if we dont use break after each case then it will print every case till it find a break statement or till it reach the last line of code.