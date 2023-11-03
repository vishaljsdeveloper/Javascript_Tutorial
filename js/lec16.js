//HTML DOM: CREATING , REMOVING and REPLACING Elements using javascript  : output=index3.html
//CREATING an ELEMENT : createelement and createtextnode
let element = document.createElement('li');
console.log(element);//this will show li element without any class and id. comment below code to see the effect
//add a class name  and id to created element
element.className='childul';
element.id='createdli';
console.log(element);
element.setAttribute('title','mytitle')//setting individual inline css propery . 1st argument=key and 2nd argument=value.
element.setAttribute('style','color:red')//setting inline css. we can also use element.style.color="red";
console.log(element);
element.innerText="hello everyone";//agar isko bold ya kuchh or karna hai to innerHTML use kar sakte ho
//ADDING CREATED node objects to DOM(that is html file)
let ul = document.querySelector('ul.this')//pehla ul jiska class this hai.
 ul.appendChild(element);//added element in ul which has class name = this. we can see the changes in browser not in html vs code file as we are writing code in javascript here.check the browser now.

 console.log(element);
 //using create text node
 let text = document.createTextNode(' i am a textnode');
 element.appendChild(text);//now this will also add with hello everyone text. comment this code to see previous effect.actually we should do all this before code line 15.

//REPLACING an element(lets replace just created element) in DOM
let elem2 = document.createElement('h3');
elem2.className='elem2';
elem2.id='elem2';
let tnode=document.createTextNode('this is a create text node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);//replacing element with elem2.comment this code to see previous effect
//replacing child of an element .
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'))//1st argument :element= jis se replace karna hai. 2nd argument jisko replace karna hai.ab this ki jagah element ke textnode wala text aayga.comment this to see earlier element with id=fui.jisko bhi replace kar rahe hai yani 2nd argument wo myul ka child hona chahiye nai to error show karega
//REMOVING a child
myul.removeChild(document.getElementById('lui'));//it will remove the child of myul whose id is lui.
console.log(elem2);
let pr = elem2.getAttribute('id');//getAttribute : it will get/bring the attributes of element. here it will give the id name of elem2.
console.log(pr);
pr = elem2.getAttribute('class');//here it will give the class name of elem2.
console.log(pr);
pr = elem2.hasAttribute('class');//it will return either true or false. here it is checking whether elem2 has any class or not.it has , so it will return true
console.log(pr);
//we can also remove the attribute
elem2.removeAttribute('id');//it will remove the id from elem2
console.log(elem2,pr);//it will remove the id attribute from elem2. pr=true because it has class attribute
elem2.setAttribute('title', 'mytitle');//comment this to see previous effect
console.log(elem2);//this will set the attribute in elem2

//quiz2: create an heading element with text "go to text with harry" and create an a tag outside it with href wwww.codewith**.com 
