//lec24 :- DATE and TIME OBJECT
let today= new Date();
console.log(today);
console.log(typeof today);// object aayga kyunki reference data type hai
let  otherDate = new Date('8-4-2003 08:56:08'); // setting date manually
console.log(otherDate);
let  otherDate2  = new Date('june 13 2005'); // setting date manually
console.log(otherDate2);
let  otherDate3 = new Date('09/16/2009'); // setting date manually . format hamesha mm/dd/yyyy hi rahega
console.log(otherDate3);
let a = otherDate.getDay();
console.log(a);//sunday = 0 satorday = 6
let b = otherDate.getDate();
console.log(b);
let c = otherDate.getMinutes();
console.log(c);
let d = otherDate.getSeconds();
console.log(d);
let e = otherDate.getHours();
console.log(e);
let f = otherDate.getTime();//ye time stamps hai .  ye number of seconds since 1 january 1970 hai
console.log(f);
let g= today.getTime();//ye time stamps hai .  ye number of seconds since 1 january 1970 hai
console.log(g);
let h = otherDate.getMilliseconds();
console.log(h);
let i = otherDate.getMonth();//jan=0 and dec=11
console.log(i);
otherDate.setDate(23);
otherDate.setMonth(6);
otherDate.setFullYear(1998);
otherDate.setMinutes(43);
otherDate.setHours(5);
otherDate.setSeconds(3);
console.log(otherDate);
