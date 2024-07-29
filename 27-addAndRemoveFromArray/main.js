/*
------ Arrays Methods [adding and removing]
-----::> unshift("", "") add element to the first
-----::> push("","") add element to the end
-----::> shift() remove first element from array
-----::> pop() remove last element from array
*/
//-----::> index start from 0 [0, 1, 2, 3]
console.log(`%clet myfriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];`, "color:red; font-size:18px;");
let myfriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);

console.log(`%cmyfriend.unshift(1, 2);`, "color:red;");
myfriend.unshift(1, 2);

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);


console.log(`%cmyfriend.push(7, 8);`, "color:red;");
myfriend.push(7, 8);

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);


console.log(`%clet firstElement = myfriend.shift();`, "color:red;");
let firstElement = myfriend.shift();

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);
console.log("%cconsole.log(`first element from array is: ${ firstElement }`);", "color:#5ddd;");
console.log(`first element from array is: ${firstElement}`);


console.log(`%clet lastElement = myfriend.pop();`, "color:red;");
let lastElement = myfriend.pop();

console.log(`%cconsole.log(myfriend);`, "color:#5ddd;");
console.log(myfriend);
console.log("%console.log(`last element from array is: ${ lastElement }`);", "color:#5ddd;");
console.log(`last element from array is: ${lastElement}`);
