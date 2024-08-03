/*
------ Arrays Methods [sort]
-----::> sort(Function) [Opt]
-----::> reverse

*/
//-----::> index start from 0 [0, 1, 2, 3]
console.log(`%clet myFriends = [10, "Said", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];`, "color:red; font-size:16px;");
let myFriends = [10, "Said", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

console.log(`%cmyFriends.sort();`, "color:#12fd90;");
myFriends.sort();
console.log(`%cconsole.log(myFriends);`,"color:#5ddd;");
console.log(myFriends);

console.log(`%cmyFriends.reverse();`, "color:#12fd90;");
myFriends.reverse();
console.log(`%cconsole.log(myFriends);`, "color:#5ddd;");
console.log(myFriends);
