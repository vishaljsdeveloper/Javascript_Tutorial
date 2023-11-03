//lec 21 is exercise 2 and lec 22 is a project we will do it later
//lec 23 :- MATH OBJECT IN JAVASCRIPT :- basically use in backend javascript
let z = Math;
console.log(z);//it will show allthe available mathematical function in javascript like ceil,sqrt.absolute,cbrt,floor,min etc
//sare variable me let lagana bhul gaya hun niche
a= Math.PI;
console.log(a);// it will show the value of pi

b= Math.ceil(5.2);//it will give the highest integer value=6
console.log(b);
d= Math.floor(5.8);//it will give the lowest integer value=5
console.log(d);
c= Math.round(5.2);//it will give the round integer value=5
console.log(c);
e= Math.abs(-5.2);//it will give the absolute value. negative ko positive bana dega
console.log(e);
f= Math.sqrt(49);//it will give the square root
console.log(f);
g= Math.pow(2,3);//it will give the exponential value. first argument= base and second argument = power
console.log(g);
h= Math.min(2,4,6,8,9,5,-7);//it will give minimum number
console.log(h);
i= Math.max(2,4,6,8,9,5,-7);//it will give maximum number
console.log(i);
j= Math.random();//it will give random  number between 0 and 1 every time we reaload
console.log(j);
//j=(0,1);
//j100= j*100= (0,100);
//j10_100=10+j*(100-90)= (10,100);
j= 100*Math.random();//it will give random  number between 0 and 100 every time we reaload
console.log(j);
k= 50+(100-50)*Math.random();//it will give random  number between 50 and 100 every time we reaload
console.log(k);
//agar integer random hahiye to ceil or floor use kar sakte hain
l=Math.ceil(50+(100-50)*Math.random());//it will give random INTEGER number between 50 and 100 every time we reaload
console.log(l);
