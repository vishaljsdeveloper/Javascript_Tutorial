//JAVASCRIPT EVENT TYPE + MORE ON EVENT :output=index4.html
let btn = document.getElementById('btn');//slecting and storing in variable btn
btn.addEventListener('click', func1);//adding event listener to variable btn which has stored an  element
btn.addEventListener('dblclick',func2);

function func1(e){
    //console.log("thanks", e);//abhi click karenge to ye none.php pe redirect kar dega kyunki default value submit hai or hum console.log ko dekh nai payenge.dekhne ke liye default value ko prvent karna parega preventDefault function se.
    e.preventDefault();//ab thanks or e show hoga
}
function func2(e){
    console.log("thanks you double clicked" , e);
    e.preventDefault();//ye bhi inspect close karne ke bad hi fire ho raha hai,kyu?. jab ye fire hota hai is se pehle 2 bar click wala function fire hoga.uske console.log comment kar sakte hai bas dbl click wala dekhne ke liye..ab bhi inspect close karne ke bad hi fire ho raha hai.
}
//there are other events also like mousedown,mouseup,mouseenter , mouseleave,mousemove etc
document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log("you entered no")//problem:click karna par raha hai ya inspect band karna par raha hai
    // document.body.style.backgroundColor="red";
})
document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log("you exited no")//problem:click karna par raha hai ya inspect band karna par raha hai
})
