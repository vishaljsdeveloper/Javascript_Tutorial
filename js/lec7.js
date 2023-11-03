//Arrays(and its methods) and Objects in Javascript :-
//ARRAYS and its Methods
//2 ways to create an Array
let marks = [34, 23, 26, 98, 25];
const fruits = ['orange', 'apple', 'mango'];
const mixed = ['str', 89, [3, 5]]; // these 3 are 1 way to create an array.
const arr = new Array(23, 12, 31, 'orange');//this is 2nd way to create an array.
//retriving array
console.log(arr);//it will show total element and index wise element.
console.log(mixed);
console.log(marks[0]);//shows element of array(marks) at index 0.
console.log(fruits[2]);//shows element of array(fruits) at index 2.
console.log(mixed[2]);//shows element of array(mixed) at index 2.
console.log(arr.length);//it is a property of array not method. it will show number of elements in array.
console.log(Array.isArray(arr));// output=true; this method will check whether it is an array or not.
arr[0] = 'hari';//it will replace the element of array arr at index 0.
console.log(arr);
let arrelement = arr[0];//saving element  at index 0 of array arr in variable arrelement.
console.log('element is', arrelement);//we can use + in place of , also , automatically takes a white space.
let value = marks.indexOf(23);//saving index of element of array marks.
console.log(value);//output=1
let val = marks.indexOf(77);
console.log(val);// output=-1 because 77 is not an element os array marks.

//mutating or modifying arrays.(all these changes the original value of an array).
marks.push(356);//adding new element at end
console.log(marks);
marks.unshift('hari'); // adding new element at start
console.log(marks);
marks.pop();//removing element from end
console.log(marks);
marks.shift();//removing element from start.
console.log(marks);
marks.splice(1, 3);// first argument=is index se  start karna hai hatana, 2nd argument=itne element ko hatana hai. yahan 3 element hatana hai index 1 start karke. jitna element hata rahe hai utna add bhi kar sakte hai.
console.log(marks);
marks.reverse();//reverse the array marks.
console.log(marks);
let marks2 = [1, 2, 3];
marks = marks.concat(marks2);//concating 2 arrays
console.log(marks);
const fru = ["Banana", "Orange", "Apple", "Mango"];
let text = fru.join();//join() returns an array as a string:Banana,Orange,Apple,Mango
console.log(text);
const frui = ["Banana", "Orange", "Apple", "Mango"];
let tex = frui.join(" and ");//and = separator.  Banana and Orange and Apple and Mango
console.log(tex);

//OBJECT:-
//creating an object
const myobj = {
    firstName: 'harry',
    Channel: 'code',
    isActive: true,
    marks: [1, 3, 5, 7]
}
// accessing object: there are 2 ways to access object.
console.log(myobj);//access all the property of object.
console.log(myobj.firstName);//access firstName property of obect.
console.log(myobj.marks);
console.log(myobj['marks']);//2nd way to  access object property
console.log(myobj['isActive']);
//note :- we use array to store elements. we use  object when we have to store key value pair