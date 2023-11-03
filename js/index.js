// alert('hello');
console.time('your code took execution time of');//use to find the execution time of js code between time and time End. but string should be same in time and time end . here the string is='your code took execution time of'
console.log('hello js');// printing string with quote we can use single as well as double quote
console.log(54+62);//printing integer. we can use console as calculator
console.log([34,56,75,88,92,33])//printing an array. we have omitted semicolon ; here as js is a forgiving language but its a bad practice. we must use semicolon.
console.log(true);//printing boolean data types
console.log({name:'vishal' , age:26 , ageValue:true});// printing an object which contains key:value pair 
console.table({name:'vishal' , age:26 , ageValue:true});// to view object in the form of table
console.warn('this is a warning. it is useful when you want to throw warning as per the logics of your code');
//console.clear();//use to clear the console 
console.timeEnd('your code took execution time of');//dont use console clear with it as it will clear the log
console.table({name:'vishal' , age:26 , ageValue:true})
console.assert(566<189, 'age greater than 189 is not possible');//this is used to throw an error if 1st statement is wrong
/*suppose a user input an age 566
but we have validated that age cannot be grater than 189
in this case an error will show up as
age greater than 189 is not possible .
also this is a multi line comment . above we have used single line comment */
console.error('this is an error')//to throw error
console.table({name:'raj' , age:26, ageType:false}); 