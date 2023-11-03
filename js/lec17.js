//lec17: EVENTS AND EVENT OBJECT IN JAVASCRIPT :OUTPUT=index4.html
//There are many events(google it) , we will cover the most important here like on click etc.
//step1.select the element . step2. add eventlistener to that element. addeventlistener ka 2 argument hota hai. pehla konsa event(click, press key etc) or dusra FUNCTION : - click hone pe kya karna hai uske liye function ke andar likhenge code. jaise hi click hoga waise hi function call hoga. 
//document.getElementById('heading').addEventListener('click',function(){
    //console.log("you have clicked the heading");
    
     //location.href='//google.com';//jaise hi click ho to google pe redirect kar de. aise hi koi bhi function bana kar kaam karwa sakte hai

// })
//abhi jo click event hua uska event object humlog print karna dekhenge function ke argument ke help se jo ki event (e) hai.function me argument denge event (e) ka.
document.getElementById('heading').addEventListener('click',function(e){
    console.log("you have clicked the heading");
    console.log(e);//ye event object ke bare me bahut kuchh batayga . sabse important target hai ki kaha click hua hai.
    let variable = e.target;
    console.log(variable);//ye target= kaha click hua hai wo print karke dega
    variable=e.target.className;
    console.log(variable);//ye jis target element pe click hua hai uska class batayga
    //e.target ek element deta hai us se hum kuchh bhi pata kar sakte hai jaise id,className.classList
    variable=e.target.classList;
    console.log(variable);//ye class ka naam ka DOM token list dega to usko hum iterate bhi kar sakte hai foreach loop se.
    variable=e.target.id;
    console.log(variable);//target element ka id batayga
    variable=e.offsetX;
    console.log(variable);//target elemnet se x-axis me kitne dur click kiya hai
    variable=e.offsetY;
    console.log(variable);//target element se y-axis me kitne dur click kiya hai
    variable=e.clientX;
    console.log(variable);//browser window se x-axis me kitne dur click kiya hai
    variable=e.clientY;
    console.log(variable);//browser window se y-axis me kitne dur click kiya hai
})  
//ye sab kaam hum dusre event pe bhi kar sakte hai jaise mouseover
document.querySelector('#fui').addEventListener('mouseover',function(e){
    console.log('mouse is over the div with class name container');
})//event ho raha lekin console band karke check karna par raha hai. console open me kyu pata nai chal raha hai?