/*
----------String Methods
-----::> Access With Index
-----::> Access With charAt()
-----::> length
-----::> tuUpperCase
-----::> toLowerCase
-----::> trim()
-----::> chain Methods
*/
let theName = "Said";
console.log('%clet theName = "Said"', "color:#dd3398;");
//-----------------------::> Access with Index
console.log('-----------------------::>%c Access with Index', "color:red;");
console.log('console.log(theName[0])');
console.log(theName[0]);
console.log('-----------------------::>%c Access with charAt', "color:red;");
console.log('console.log(theName.charAt(0))');
console.log(theName.charAt(0));
console.log('-----------------------::>%c length', "color:red;");
console.log('console.log(theName.length)');
console.log(theName.length);
console.log('-----------------------::>%c toUpperCase', "color:red;");
console.log('console.log(theName.toUpperCase())');
console.log(theName.toUpperCase());
console.log('-----------------------::>%c toLowerCase', "color:red;");
console.log('console.log(theName.toUpperCase())');
console.log(theName.toLowerCase());
console.log('-----------------------::>%c trim', "color:red;");
console.log('%cvar theNameSpace = "  said  "', "color:#dd3398;");
var theNameSpace = "  said  ";
console.log('console.log(theNameSpace.trim())');
console.log(theNameSpace.trim());
console.log('-----------------------::>%c chain Methods', "color:red;");
console.log('console.log(theNameSpace.trim().charAt(1).toUpperCase())');
console.log(theNameSpace.trim().charAt(1).toUpperCase());
