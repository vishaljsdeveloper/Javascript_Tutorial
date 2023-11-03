//FUNCTION :-
//Defining a function :-
function greet(name){  // greet is the name of function. we will use this name to call function. name is the                      argument, we have to pass a value to this argument.
    console.log(`happy birthday ${name}. have a nice day`);
}
 let name = 'suraj';//passing the argument
greet(name);// calling of a function. here we are not returning anything to function that is greet
// greet('suraj') we can use this way also. here we are passing the argument and calling the function at once.

//passing more than one argument in function
function greet1(namee,thank){
    console.log(`happy birthday ${name1}. have a nice day. ${thank}`);
}
let name1='rohan';
greet1(name1,'thanks a lot');//argument 1 will take rohan and in second argument we are dirctly passing "thanks a lot" so  it will take it as a 2nd argument

//setting default value of argument
function greet2(name2,thanks='thank you'){
    console.log(`happy birthday ${name2}. have a nice day. ${thanks}`);
}
let name2='raj';
greet2(name2);// since, here we are not passing the 2nd argument .so it will take the default value for 2nd argument=thank you. if we dont set any default value in argument and dont use it while calling a function then it will give output of undefined.

//note:- in the above examples, function is not returning any value. we can return a value to function.

//returning a value to function:-
function hello(name3,love){
    console.log(`happy birthday ${name3}. have a nice day. ${love}`);//we will not use console here.
}
let name3 ='ravi';
let val=hello(name3, 'love you');//shows the msg of console.log
console.log(val);//undefined. because we did not returned any value to function hello and val is storing the value of function greet.

//returning integer:-
function hell(name4,loves){
    console.log(`happy birthday ${name4}. have a nice day. ${loves}`);//we will not use console here.
    return 4;
}
name4='vishal';
let valu=hell(name4, 'love you very much');//as we are calling function and we used console.log above .so it will show the msg
console.log(valu);//returning 4 to the function hell and storing it in valu. so output=4

//returning variable that is real msg.
function world(name5,thank5='thank you very much'){
    let msg = (`happy birthday ${name5}. have a nice day. ${thank5}`);//storing it in variable msg
    return msg;//returning value of msg to function world
}
let value=world('ram', 'thanks');// calling the function by passing argument and storing the return value to variable value
console.log(value);// showing the returned value

//WE CAN DIRECTLY STORE THE FUNCTION IN A VARIABLE:-
const mygreet=function(name6,thank6){
    let msg2 = (`happy birthday ${name6}. have a nice day. ${thank6}`);
    return msg2;
}
// let result = mygreet("vishu","dhanyawad"); 
//  console.log(result);
//  console.log(mygreet("vishu","dhanyawad"))
//direct aise bhi kar sakte hai bina result me store kiye.
//same  hi hai bas function ke bad jo world likha tha usko hata kar ek variable bana diya hai or function ko usme store kar diya hai.

//function within an object and annonymus function:-

const myobj={
    names:"soham",
    game:function(){//anonymous function: function without name.doubt= sayad yaha game hi function ka naam ho gaya ky
        return "gta";
    }

}
console.log(myobj.game());

//SCOPE :- let/const has block level scope and var has a function level scope.
// let example:-
if(1){
    let i = 234;
    console.log(i);
}
//console.log(i)//error i is not define : because let has a block level scope block ke andar define karenge tp block ke bahar kam nai karega. bahar kaam karwane ke liye isko block se bahar define karna hoga. if statement se pahle.
function ui(spa){
    let i=9;
    console.log(i);
    return `this is a ${spa} ui`
}
//console.log(ui("vishal",i));//error because let has block level scope.
console.log(ui("vishal"));//ab error nai aayga kyunki i ko bahar nai yse kar rahe hai. or andar i ka value 9 hai.

//Var example.
if(1){
    var j=238;
    console.log(j);
}
console.log(j);//no error because var has functional scope and it is a global variable now.let me eroor aata
function ux(spe){
    let j=9;
    console.log(j);
    return `this is a ${spe} ui`
}
console.log(ux("vishu"),j);//no error . yaha bhi wo global j ka value print kar dega that is 238.or function ke andar 9. this is the difference between block scope and functional scope.
