//LOOPS in JAVASCRIPT :
// generaly there are 3 types of loops:-
// 1.for loop
// 2.while loop
// 3.do while loop
//FOR LOOP:-(initialization, condition,updation)
for(let i=0;i<10;i++){
    console.log(i);
}
//while loop
let j = 0; //initialization
while(j<10){  //condition
    console.log(j+1);
    j=j+2; //updation
}
 
//do while loop:- it will check the condition only after running one time. isme condition last me hai. isme condition bracket ke bahar hoga. while last me aayga after updation.
let k=0;
do{
    console.log(k+1);
    k=k+3;}
    while(k<10);

    //break statement : use to exit the loop.
    let m=0;
    do{
        if(m===6){
            break;
        }
        console.log(m+1);
        m=m+2;
    }
    while(m<10);
    //continue statement: use to skip a iteration.
    let n=0;
    do{
    if(n==5){
        n=n+1;
        continue;
    }
    console.log(n);
    n=n+1;
    }
    while(n<10);

    //Few More Loops :- which helps to iterate array and object
    //1.forEach loop :- for arrays
    let arr=[2,5,6,4,2,3];
    arr.forEach(function(element){
        console.log(element);
    }
    );
    // this can be achieved using for loop also
    for(let i=0;i<arr.length;i++){
        const element=arr[i];
        console.log(element);
    }
    console.log('done');
    // note:- other arguments of forEach loops are :- index and array.
    arr.forEach(function(element,index, array){
      console.log(element, index,array );
    });

    //2.forin loop: for objects:-
    let obj={
        name:"rohan ji",
        age:64,
        type:"dangerous",
        os:"windows"
    }
    for(let key in obj){
        console.log(obj[key]); // it will only give the value from key value pair of object 
        console.log(`the ${key} of object is ${obj[key]}`);// it will give both key as well as value
    }