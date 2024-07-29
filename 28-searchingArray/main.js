/*
------ Arrays methods [search]
-----::> indexOf(search element, from index [opt])
-----::> lastIndexOf(search element, from index [opt])
-----::> includes(valueToFind, fromIndex [opt] [ES7])

*/
//-----::> index start from 0 [0, 1, 2, 3]

console.log(`%clet myfriend = ["Ahmed", "Mohamed", "Sayed", "Ahmed", "Alaa"];`, "color:red; font-size:18px;");
let myfriend = ["Ahmed", "Mohamed", "Sayed", "Ahmed", "Alaa"];


console.log(`%cconsole.log(myfriend.indexOf("Ahmed"))`, "color:#5ddd;");
console.log(myfriend.indexOf("Ahmed"));

console.log(`%cconsole.log(myfriend.indexOf("Ahmed", 1));`, "color:#5ddd;");
console.log(myfriend.indexOf("Ahmed", 1));


console.log(`%cconsole.log(myfriend.lastIndexOf("Ahmed"));`, "color:#5ddd;");
console.log(myfriend.lastIndexOf("Ahmed"));

console.log(`%cconsole.log(myfriend.lastIndexOf("Ahmed",-3));`, "color:#5ddd;");
console.log(myfriend.lastIndexOf("Ahmed", -3));


console.log(`%cconsole.log(myfriend.includes("Mohamed"));`, "color:#5ddd;");
console.log(myfriend.includes("Mohamed"));

console.log(`%cconsole.log(myfriend.includes("said"));`, "color:#5ddd;");
console.log(myfriend.includes("said"));