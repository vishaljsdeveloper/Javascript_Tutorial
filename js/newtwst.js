// const num = new Promise((resolve, reject) => {
//     let num1 = Math.round(Math.random() * 100);
//     if (num1 % 5!==0) {
//       resolve(num1);
//     } else {
//       reject(num1);
//     }
//   })
//     .then((resolve) => {
//       console.log(" num is not divisible by 5 here, so we will resolve. Number is:" + resolve);
//     })
//     .catch((reject) => {
//       console.log("num is  divisible by 5 here, so we will reject . Number is : " + reject);
//     })
//     .finally(() => {
//       console.log("Finally fullfied");
//     });
  
 //........................................ 
// arr=[1,3,2,4,5,6,7,8];
// arr.forEach(function(el){
//     if(el%2!==0){
//         console.log(el);
//     }
// }
// )
//............................................

// function Person(name) {
//     this.name = name;
// }

// function Teacher(name, subject) {
//     Person.call(this, name);
//     this.subject = subject;
// }

// Teacher.prototype.teach = function() {
//     console.log(`${this.name} is now teaching ${this.subject}`);
// }

// const him = new Teacher('Danish','JavaScript');
// console.log(him.teach());
let obj = {
    _i: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        return { value: this.fib(this._i++), done: this._i > 10 };
    },
    fib(val) {
        if (val < 2)
            return val;
        else
            return this.fib(val - 1) + this.fib(val - 2);
    }
}

for (const el of obj) {
    console.log(el);
}

