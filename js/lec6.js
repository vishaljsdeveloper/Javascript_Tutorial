//  STRING: Properties, Methods and Template Literals 
const name = 'vishal'
const greeting = 'Good Morning'
console.log(greeting + " " + name);
let html;
html = "<h1> This is a heading</h1>" +
     "<p> This is a para</p>";//if + is not ued then error. we can use backticks to avoid +.
console.log(html);
//.concat = string property to cancatinate more string in existing string.
html = html.concat('this', ' ', 'str2');
console.log(html);
//.length = to find total lenghth of string. it will count all the character. it will count the whitespace also.
console.log(html.length);
console.log(html.toLowerCase());//convert string to lower case. it will not change the original variable.
console.log(html);//original variable not changed
console.log(html.toUpperCase());//convert string to upper case. it will not change the original variable.
console.log(html);//original variable not changed
console.log(html[1]);//shows the character at index 1. index starts from 0.similar to charAT
console.log(html.indexOf('This'));//it will give the index of T from "This". if there is multiple "this" then it will
//take the first occurance of "This". if checked string is not there then output will be -1.it is case sensitive.
console.log(html.lastIndexOf('This'));//it will give the index of T from "This" of last occurance of This.
console.log(html.charAt(3));//shows the character at index 3. index starts from 0.
console.log(html.endsWith("this str2"));//output=true if it ends with the given string. otherwise false.it counts whitespace.
console.log(html.endsWith('dcg'));//output=false
console.log(html.includes('This'));//output=true if it includes the given string otherwise false.
console.log(html.includes('dcg'));//output=false
console.log(html.substring(0, 4));//it will show the string at index 0, 1, 2 & 3 that is till (n-1).
console.log(html.slice(-4));//it will show the last 4 string.
console.log(html.slice(0, 4));// same as substring. difference between substring and slice is that we can't use -4 in substring.
console.log(html.split(' '));//it will return the output by splitting string wherever is a space and the output will be in the form of array.
console.log(html.split('<'));//it will not going to show < while displaying output.
console.log(html.replace('This', 'it'));//it will replace "This" by "it" and display the html string.but it will replace the first occurance of 'this' not all string 'this'.

//Template Literals:
let fruit1 = 'orange';
let fruit2 = 'apple';
let myHtml = `hello ${name}
            <h1>this is heading</h1>
            <p>you like ${fruit1} and ${fruit2}.</p>`
console.log(myHtml);
//displaying myHtml in HTML page : -
document.body.innerHTML = myHtml;//it will overwrite the previous html tag because we are inserting it in body.