//lec31 :- ES6 CLASS INHERITANCE : output=index4.html
//class= class ek template hota hai , ek blueprint hota hai. jab class ka object banta hai  tab CONSTRUCTOR RUN hota hai. jaise prototype me constructor banate the waisa hi hai ye bhi, object bhi waisa hi banta hai.
//creating class
class Employee{
   constructor (givenName,givenExperience,givenDivision){
    this.name= givenName;
    this.experience=givenExperience;
    this.division=givenDivision;
   }
   slogan(){
       return `i am ${this.name} and this is the best company`;//prototype me constructor ke bahar kihte the employee.prototype.slogan se. yaha class ke andar hi likhenge lekin constructor ke bahar
   }
   joiningYear(){
       return 2022 - this.experience;
   }
   //class me ek aisa method bana na jise bina object banaye use karna ho to static likh kar bana sakte hai par use object ka kuchh bhi use nai karna hoga for example if we have to perform addition,subtraction, multiplication,division etc
   static add(a,b){
       return a + b ;
   }
}
//adding employee/object in class employee
vishal = new Employee('vishal','25','engineer');
console.log(vishal);
console.log(vishal.slogan());
//adding another object/employee 
vishu = new Employee('vishu','5','coder');
console.log(vishu);
console.log(vishu.slogan());
console.log(vishu.joiningYear());//output=2017
console.log(Employee.add(34,5));// we are not using any object property. we are directly using  class that is Employee

//note:- constructor ek aisa function hai jo object jab banaya jata hai tab hi run kar jata hai
//INHERITENCE IN CLASS
//class Programmer Inheriting properties of class Employee  using extends.
// extends= mujhe programmer naam ka ek class bana na hai lekin jo bhi empoyee me hai use pehle le lo
class Programer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,givenGithub){
        super(givenName,givenExperience,givenDivision);//jab programmer ka koi bhi object bane new ki madad se to super ko call kar do. super ka matlab jis se prograamer class extend ho kar aa raha hai
        this.language=givenLanguage;
        this.github=givenGithub;
    }
    //creating a method/function. jaisa prototype me programmer.prototype.favouriteLamguage karke karte the bahar constructor ke
    favouriteLanguage(){
        if(this.givenLanguage=='python'){
            return 'python';
        }
        else{
            return 'javascript';
        }
    }
    //creating static method : static tab use karenge jab hame this ka koi use nai karna hai
    static multiply(a,b){
        return a*b;
    }
}

//creating an object in programmer . jaise hi object banayenge new se waise hi constructor call hoga
raju = new Programer('raju',3,'programmerlazy','java','raju420');
console.log(raju);
console.log(raju.favouriteLanguage());
// console.log(raju.multiply(2,3)); it will show error because its an static function/method
console.log(Programer.multiply(2,3));//it will work now because we are using class name now
console.log(raju.slogan());//we can use it directly unlike prototype where we have to inherit the prototype again
console.log(raju.joiningYear());//all the methods of employee class can be used in the programer class
console.log(Programer.add(2,6));//we can also use the static methods of employee class in programer class