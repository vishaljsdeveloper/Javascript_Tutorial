//lec28:- OBJECT PROTOTYPES
//jab hum object literals  se ya constructor se object create karte hai or use view karte hai to console ke last me proto likha milta hai use hi prototype kehte hai.
//prototype= matlab aap kaha se banana stert kar rahe hai. for example - object literals banate hai to bject prototypes se bana na start karte hai. object prototype pehle se defined hai javascript me  jisme pehle se kuchh method defined hai jise hum use kar sakte hai  for ex- toString, valueOf,hasOwnProperty,constructor etc. it means object prototype available tha jab aap object literals banaye.
//jaise bootstrap hai to usko use karte hai or usko modify karte hai to bootstrap ek prototype hua . kyunki hum jaha se bana tha waha se banana start kiye.

function person(givenName) {
this.name= givenName;
}
let person1= new person('vishal');
console.log(person1);//isme do bar proto dikhega . pehla proto jo hai wo niche wale proto se inherit ho raha hai kyunki niche wala global hai jiska prototype object hai.

//creating our own method/prototype just like toString  for constructor = person. this prototype is only for person. it is not a global prototype.
person.prototype.getName= function(){
    return this.name;
}// ab person ke proto me ek naya method add ho gaya hoga getName se. agar person.prototype ki jagah hum object.prototype likhte to wo global wale prototype yani niche wale proto me dikhta jo ki hume nai karna chahiye kyunki wo method fir sab object me include ho jayga.. hame hamesha apne  constructor ka hi prototype banana chahiye
let person2 = new person('raj');
console.log(person2);
console.log(person1.getName());// it will return the name
//note:- object literal ka naya method/prototype nai bana sakte hai. constructor bana kar karna parega

//using method of global object prototype
console.log(person1.toString());//[object Object] likha aayga matlab string me convert ho gaya hai. no error

//adding one more methods  to local prototype of person
person.prototype.setName= function(newName){
       return this.name=newName;
}//new method added to prototype of person
console.log(person2);
console.log(person2.setName('vishu'));//set and display:it will set the name of person 2 as vishu and will display it
person1.setName('rohan');// setting new name
console.log(person1);//displaying new name
