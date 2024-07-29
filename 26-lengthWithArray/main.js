/*
------ Arrays Methods 
-----::> length

*/
//-----::> index start from 0 [0, 1, 2, 3]
console.log(`%clet myfriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];`, "color:red; font-size:18px;");
let myfriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);

console.log(`%cconsole.log(myfriend.length);`, "color:#5ddd;");
console.log(myfriend.length); // 4

console.log(`%cmyfriend[4] = "Said";`, "color:red;");
myfriend[4] = "said";

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);

console.log(`%cconsole.log(myfriend.length);`, "color:#5ddd;");
console.log(myfriend.length); // 5

console.log(`%cmyfriend[myfriend.length] = "Salma";`, "color:red;");
myfriend[myfriend.length] = "Salma";

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);

console.log(`%cconsole.log(myfriend.length);`, "color:#5ddd;");
console.log(myfriend.length); // 6

console.log(`%cmyfriend[myfriend.length - 3] = "Salmona";`, "color:red;");
myfriend[myfriend.length - 3] = "defrent";

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);

console.log(`%cconsole.log(myfriend.length);`, "color:#5ddd;");
console.log(myfriend.length); // 6


console.log(`%cmyfriend.length = 3;`, "color:red;");
myfriend.length = 3;

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);

console.log(`%cconsole.log(myfriend.length);`, "color:#5ddd;");
console.log(myfriend.length); // 3
