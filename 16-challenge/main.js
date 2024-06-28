/*
-----::> String Challenge 
-----::> All Solutions Must Be In One Chain
-----::> You Can Use Concatenate
*/

let a = "Elzero Web School";

//-----------------------::> Include This Methods In Your Solution [slice, charAt]
console.log(`%c-----------------------::> Include This Methods In Your Solution [slice, charAt]`,"color:#dd3398;"); 
console.log(`%ca.slice(2, a.indexOf(a.charAt(7)))`,"color:red; font-size:18px;"); 
console.log(a.slice(2, a.indexOf(a.charAt(7)))); // zero

console.log(`%c-----------------------::> 8 H`,"color:#dd3398;"); 
console.log(`%cconsole.log((a.charAt(13)).toUpperCase().repeat(8))`,"color:red; font-size:18px;"); 
//-----------------------::> 8 H
console.log((a.charAt(13)).toUpperCase().repeat(8)); // HHHHHHHH

console.log(`%c-----------------------::> Return Array`,"color:#dd3398;"); 
console.log(`%cconsole.log(a.split(" ", 1))`,"color:red; font-size:18px;"); 
//-----------------------::> Return Array
console.log(a.split(" ", 1)); // [Elzero]

console.log(`%c-----------------------::> Use only "substr" Method + Template Literals In Your Sloution`,"color:#dd3398;"); 
console.log('%c console.log(`${a.substr(0,6)} ${a.substr(11,14)}`)',"color:red; font-size:18px;"); 
//-----------------------::> Use only "substr" Method + Template Literals In Your Sloution
console.log(`${a.substr(0,6)} ${a.substr(11,14)}`); // Elzero School

console.log(`%c-----------------------::> Solution Must Be Dynamic And String May Change`,"color:#dd3398;"); 
console.log('%c console.log(`${a.charAt(0,1).toLowerCase()}${a.substring(1,(a.length - 1)).toUpperCase()}${a.substr(-1).toLowerCase()}`)',"color:red; font-size:12px;"); 
//-----------------------::> Solution Must Be Dynamic And String May Change
console.log(`${a.charAt(0,1).toLowerCase()}${a.substring(1,(a.length - 1)).toUpperCase()}${a.substr(-1).toLowerCase()}`); // eLZERO WEB SCHOOl