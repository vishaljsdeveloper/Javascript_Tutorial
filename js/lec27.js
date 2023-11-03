//lec 25 = exercise 2 solution
//lec 26 = exercise 3 :updating notes project. will do it later
//lec 27 :- Object Oriented Programing in javascript
//features of object oriented programming : objects,classes,encapsulation,inheritence,polymorphism etc.

//Creating object literal
let car = {
    name: 'maruti',
    topSpeed: 89,
    run: function () {
        console.log('car is running at a speed of' + ' '+this.topSpeed);
    },
}
console.log(car);
console.log(car.name);
console.log(car.run());

//now we will Create objects using CONSTRUCTOR and we will see how it is different from object literals.
//new Date() //new = 1 naya object banata hai constructor ki madad se. we have alresdy seen constructor like this.
//Creating a constructor for cars.
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topSpeed} kmph than mercedes`)
    }
}
car1 = new GeneralCar('nisaan', 150);
console.log(car1);
console.log(car1.run());
console.log(car1.analyze());
car2 = new GeneralCar('maruti', 120);
console.log(car2);
console.log(car2.run());
console.log(car2.analyze());
//so benefit of constructor is it reduces code redundancy and easy to maintain. nai to hume har car ke liye alag alag object literal banana parta.
