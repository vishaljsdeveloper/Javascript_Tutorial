//*lec 19 was  exercise 1.will do it later
//lec-20: LOCAL Storage and SESSION Storage
//local storage or session storage key:value pair me store karta hai.
//note:- session storage bas 1 session ke liye valid hota hai . browser band hote gayab ho jaya hai.
console.log(window.localStorage);//abhi length 0 milega kyunki kuchh bhi nai hai local storage me.
//add a key value to local storage =function to set item in local storage = localStorage.setItem('key' , 'value');
localStorage.setItem('name','hari');//value me hum variable bhi de sakte hai agar chahe to
localStorage.setItem('name2','raj');//noew thw length of local storage is 2
console.log(localStorage.name);//output=hari. lekin ye bas console me retrive karega or kuchh nai
//function to retrive item from local storage = localStorage.getItem('key')
let naam = localStorage.getItem('name2');//ye local storage se retrive karke variable me store kar dega . agar getItem exist nai karta hai to null milega.
console.log(naam);
//function to delete or clear everything from local storage=localStorage.clear()
// localStorage.clear();
//function to delete or clear single key value pair from local storage= localStorage.removeItem('key);
// localStorage.removeItem('name');
//local storage or session storage me limitation ye hai ki wo arrays etc ko store nai kar sakta hai. we can overcome this limitation using JSON.stringify and JSON.parse function.  JSON.stringify se hum array ko string me convert karke setItem(store) kar lenge fir use JSON.parse se array ke rup me getItem(show) kar lenge. 
//JSON.stringify as a argument object lega(jo ki har reference data type hai) or return string karega
//JSON.parse as a argument string lega or object return karega
let impArray = ['adrak','pyaj','bhindi'];
// localStorage.setItem('sabji', impArray);//ye save to hoga lekin string me ho jayga(array wala bracket nai aayga) jab getItem karenge to wo ek line me string ke rup me aayga
localStorage.setItem('sabji', JSON.stringify(impArray));//ab ye srting me convert ho gaya hai ab bhi hum ise getitem ka sakte hai lekin wo bhi string hi milega .uska typeof string hoga na ki object. isliye getitem karte wakt use hum json.parse ka lenge to uska typeof objectho jayga or usme humlog foreach loop, push,pop wagera use kar sakte hai ya koi or array ki property use kar sakte hai.
let sabji = JSON.parse(localStorage.getItem('sabji'));
console.log(sabji);
console.log(typeof sabji);//output=object

//SESSION STORAGE: ye browser band hote hi delete ho jata hai. sab wahi function ka use hoga jo local storage me hua. just replace local with session everywhere. 
//adding item to session storage
sessionStorage.setItem('sessionname','harry');
sessionStorage.setItem('sessionname2','raju');
sessionStorage.setItem('sessionsabji',impArray);//check session storage . it has stored all the three item
//similarly we can use all the other function