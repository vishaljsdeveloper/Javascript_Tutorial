//lec29: exercise 3 solution
//lec30:- PROTOTYPE INHERITANCE
//Prototype inheritance purana syntax hai. ab hum es6 class inheritance use karte hai lekin samajhna jaruri hai

//creating a prototype with object literals that we will use later . last lecture me hum alag alag se method/prototype bana rahe the. yaha ek bar me sab method bana kar createobject se use karenge. waha constructor bana kar usme prototype add kar rahe the or yaha prototype se object create kar rahe hai jo proto ka function ko inherit karega.
const proto = {
    slogan: function () {
        return `this company is best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

//this create harry object which will inherit the proto functions. which means slogan and changeName is a prototype/method of object harry.
let harry = Object.create(proto);//O capital me hai. harry naam se object banaya hai proto se
harry.name = 'vishal';
harry.role = 'coder';
console.log(harry);// output= harry , coder
harry.changeName('vishu');//we are using function of proto in harry object
console.log(harry);//output=vishu
//another syntax to create harry object. this older syntax and tough. both are same only syntax is different
const hari = Object.create(proto, {
    name: { value: 'raj', writable: true },
    role: { value: 'programmer' }
})

console.log(hari);
hari.changeName('rohan');//writable true karna parega
console.log(hari);

//EMPLOYEE CONSTRUCTOR
function Employee(givenName, givenSalary, givenExperience) {
    this.name = givenName;
    this.salary = givenSalary;
    this.experience = givenExperience;
}
//Slogan method/prototype
Employee.prototype.slogan = function () {
    return `this is best company. Regard ${this.name}`;
}
let vishal = new Employee('vishal', 20000, 55);//creating a new object with the help of constructor
console.log(vishal);
console.log(vishal.slogan());//using the slogan method/prototype

//manlo ek naya banda aata hai jo programmer hai

//Programmer
function Programmer(givenName, givenSalary, givenExperience, language) {
    //ab programmer ko inherit karne ja rahe hai Employee constructor se
    Employee.call(this, givenName, givenSalary, givenExperience);
    //language khud se set karenge
    this.language = language;
}
//INHERIT PROTOTYPE FROM EMPLOYEE
Programmer.prototype = Object.create(Employee.prototype);
let raj = new Programmer('raj', 2, 0, 'javascript');//ab raj.slogan work karega
console.log(raj);//abhi slogan inherit nai hua hai isliye raj.slogan error show karega.iske just uper slogan ko inherit karne ka code likh dete hai.
console.log(raj.slogan());
//abhi tak programmer me constructor nai aaya hai jabki employee me constructor hai.check in console after commenting manual set constructor

//MANUALLY SET THE CONSTRUCTOR
Programmer.prototype.constructor = Programmer;// ab iska bhi constructor show karega

