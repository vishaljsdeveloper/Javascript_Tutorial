//JAVASCRIPT DOM MANIPULATION:- output-index2
let a=document;//or window.document
console.log(a);
//DOM= structural representation of HTML document. it is an object of window. it has a tree structure.
// let b=document.all;
// console.log(b);//it will give all the html tag collection.it is an array type object but it isnot an array. we cant use forEach loop directly here.
let c=document.body;
console.log(c);
let d=document.forms;
console.log(d);//total no.of forms and show all the forms.
let e=document.forms[0];
console.log(e);//all the html of first form. but not working now why so?

//using for each loop to view all the html elements in the form of an array.
let g=document.all;
console.log(g);
// g.forEach(function(element){
//     console.log(element);
// })//it will show error :g.forEach is not a function. because document is a object
//we will convert it into an array with the help of Array.form()
Array.from(g).forEach(function(element){
    console.log(element);
})
//Array.from(g) = g ki madad se ek array bana lo. or array banane ke bad usko iterate karlo. Array.from ek array bana leta hai HTML collection se. sara element array ke form me aa jayga.
let h= document.links;//it will show all the links
console.log(h);
let i = document.links[0];
console.log(i);// it will show link at index 0.
let j = document.links[0].href;
console.log(j);