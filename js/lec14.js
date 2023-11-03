//HTML DOM-(PURA HTML DOCUMENT) ELEMENT SELECTOR IN JAVASCRIPT:- output=index2.html
/*
element selector:
1. single element selector
2.multiple element selector
*/

//single element selector. id selector,query selector
let element = document.getElementById('firstChild');
console.log(element);//you will get the element which has this id.
// element=element.className;
// console.log(element);//it will show all the classes of element which has id=firstChild
// element=element.childNodes;//ye likhne ke liye class name ko comment kyu karna par raha hai?
// console.log(element);//it will show all the child nodes. there is only one child node here in the form of text=child1.
// element=element.parentNode;//it will show the parent of element which has id=firstChild
// console.log(element);//other node properties are:-  firstChild,lastChild,nextSibling,nodeName,nodeType,nodeValue,previous sibling,nodeName . there are element properties also ;- innerHTML,outerHTML,textContent,innerText,style etc.
element.style.color = 'red';//we can style the element also using element property style. here we are styling the parent node as we have written above : element=element.parentNode. so now, element is the parent node of element which has id=firstChild.if we comment the parent node then it will style the element with id=firstChild
element.innerText = "vishal is a good boy";//it will change the inner text
// element.innerHTML='<b>hey there</b>';//it will change the inner html. the difference between innertext and innerhtml is that we can use html tags in innerhtml but not in innertext.
//console.log(element.innerHTML);

//query selector: it can take id,class and tag name
let sel = document.querySelector('#firstChild');
console.log(sel);//same output as getelementbyid=firstchild.
sel = document.querySelector('.child');//child class ka jo pehla element hai wo milega . child class ka multiple element select karna badme dekhenge multi element selector me.
console.log(sel);
sel = document.querySelector('b');// pehla <b> tag milega
console.log(sel);
sel = document.querySelector('h1');// pehla h1 tag milega
console.log(sel);
sel = document.querySelector('div');//pehla hi div select hoga
console.log(sel);
sel.style.color = 'green';//bas pehle div ka color green karega kyunki wahi select hai . dummy div ka nai karega.

//MULTI ELEMENT SELECTOR
//Class Selector
let elemen = document.getElementsByClassName('child');
console.log(elemen);//show all the element having class name=child
console.log(elemen[1]);//show the element at index 1 having class name=child
// ab hum wo sari element ko select karenge jiska class name= container hai fir index 0 wale container ke andar wo sab child element ko select karenge jiska class name= child hai,
let ele = document.getElementsByClassName('container');
console.log(ele[0].getElementsByClassName('child'));//yaha pe document nai likh rahe kyunki hum ele ke index 0 ke jo child hai jiska   class name=child hai usko select kar rahe hai na ki document se.isko hum ele=ele[0].gEBCN('child) karke console.log(ele); karte to bhi same result aata.
//Tag selector
let kel = document.getElementsByTagName('div');//sara div element select ho jayga
console.log(kel);
//lets iterate all the elements of kel and give background color to each element
Array.from(kel).forEach(function (element) {
    console.log(element);
    element.style.backgroundColor = "yellow";
})
//we can also use traditional for loop in place for each by giving condition i<length as it starts from 0.
