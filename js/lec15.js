//lec15=Children, Parent and TRAVERSING THE DOM : output= index2.html
let cont = document.querySelector(".no");
console.log(cont);//no class ka multiple element hai lekin ye pehla element ko select karega.
//ab hum chahe to is element ke PARENT,CHILD sabko print kar sakte hai.
cont = document.querySelector('.container');
console.log(cont.childNodes);//hamara pehla element div hai jiska id first Child hai lekin yaha output me hame text dikh raha kyunki childNodes newline ko text show karta hai or comment ko bhi count karta hai isliye length 9 ho gaya.
//agar newline ,comment,text ko avoid karna hai to replace childNodes with children kyunki children ye sab ko count nai karta hai. most of the cases me hum children hi use karte hai
console.log(cont.children);
//we can use nodeName and nodeType also
let nodeName = cont.childNodes[1].nodeName;//cont ka childnode ka 1st element ka node name batayga.
console.log(nodeName);//children bhi likh sakte hai
let nodeType = cont.childNodes[0].nodeType;
console.log(nodeType);//output= 3. check nodeType numbers.//uper se 
/*node types number: -
1 = element
2 = attribute
3 = text Node
8 = commenet
9 = document
10 = docType
*/
//humlog child ke child ko bhi traverse kar sakte hai.
let container = document.querySelector('div.container')//wo div jiska class name container hai.
console.log(container.children);//container ka children show hoga
console.log(container.children[0].children);//container ka 1st children ka children = ul.this
console.log(container.children[0].children[0].children);//container ka 1st children ka 1st children ka children
console.log(container.firstChild);//first child dega = text milega kynki new line use hua hai. agar hame newline , comment ko ignore karna hai to firstElementChild use kar sakte hai similarly lastChild or lastElementChild bhi hota hai.
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);//it will count all the child elements of dic whose class name is container
console.log(container.firstElementChild.parentNode);//first element child ka parent node batayga
console.log(container.firstElementChild.nextSibling);//text aa raha hai kyunki new line count kar raha hai . so we will use nextElementSibling
console.log(container.firstElementChild.nextElementSibling);//newline or comment ko ignore karega
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);//first element child ka nextelementsibling ka next element sibling
