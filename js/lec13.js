//exercise 1:-
// question:= ek string variable bana na hai. usme kuchh words/text  value ke rup me dena hai . fir wo sare links ko fetch karna hai jisme wo value wale words hai or baki links ko fetch nai karna hai.
 let a=document.links;
 let b='code';
 Array.from(a).forEach(function(element){
    let  li=String(element);
     if(li.includes('code')){
         //console.log(element);
       console.log(li);// yaha bhi niche jaisa 4 likha aa raha hai ? string bana diye isliye kya ?
     }
 })
 //2nd method:
 let c=document.links;
 let d='cod';
 Array.from(c).forEach(function(element){
     let mi=element;
     let min;
     mi=mi.toString();
     if(mi.includes('cod')){
        // console.log(element);//this is working fine then why not min.
        min=mi;
        console.log(min);
     }
    //  console.log(min);//yaha use karne pe undefined kyu aa raha hai.false ho raha hai isliye kyunki after if block wo rest of the code ko execute karega?
 })