//MANIPULATING WEBSITE USING JS WINDOW OBJECT.
 let a = window;
 console.log(a);//we can see all the objects of window here like alert,prompt etc. what we found is DOCUMENT is also a object of window, all events like onclick,ondbclick,onmouseup,onkeydown,onkeypress etc. are also a window object.
 //window is a global object in client side javascript. so we dont need to write window.alert, we can just write alert or any other method of window.
 //alert('hello');//no need to write window.alert as window is a global object.
//b=prompt('delete everything');
//console.log(b);//prompt:- it will give a prompt to user and whatever user will give as a input that will stored in the variable. user may cancel it or press ok without giving any input.
//c=confirm('do you want to destroy everything ?');
//console.log(c);//confirm:- it will give true as a value if user click on OK and false if user clock on CANCEL and stores the value in the variable.
//note:- we dont use alert,prompt,confirm etc in todays world.
//note:- DOCUMENT (DOM) is a part of window object .html,head,body sab document ke andar aata hai or iska tree like structure hota hai.
let d =window.document;
console.log(d);
//exploring more window object
e=innerHeight;//or window.innerHeight
console.log(e);
f=innerWidth;//or window.innerWidth
console.log(f);//agar hum browser ko chhota kare fir code save karke check kare to wo change hoga. similarly there is outerHeight and outerWidth
g=scrollX;
console.log(g);//x axis me kitna scroll kiya hai wo show karega.
h=scrollY;
console.log(h);//y axis me kitna scroll kiya hai wo show karega.
i=location;
console.log(i);//location show karega ki abhi kaha hai yani www.website.com ya local folder . or location ka function bhi show karega jaise reload,replace,tostring etc etc.... console me check karo try karke location.reload(),location.href,location.href='//google.com',
j=location.toString();//it is a method and it will show the location in string form not like location object that we used previously. reload is also a method.
console.log(j);
k=history;
console.log(k);//shows the history. 5-6 website kholo fir console me practice karo. this is important.
//history.length; - it will show length of history
//history.go(-1); - it will redirect you to previous page.it acts like back button
//history.go(-2); - it will redirect you to 2 page backwards.
//history.go(1); - it will redirect ypu to forward page