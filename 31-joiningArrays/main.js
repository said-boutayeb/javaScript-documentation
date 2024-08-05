/*
------ Arrays Methods [Joining]
-----::> concat(Array, Array) => Return A New Array
-----::> Join(Separator)


*/
//-----::> index start from 0 [0, 1, 2, 3]
console.log(
  `%clet myFriends = ["Ahmed", "Mohamed", "Sayed"];
let myNewfriends = ["Alaa", "Said", "Fouad"];
let schoolFriends = ["Waill", "Mazin"];`,
  "color:red; font-size:16px;"
);
let myFriends = ["Ahmed", "Mohamed", "Sayed"];
let myNewfriends = ["Alaa", "Said", "Fouad"];
let schoolFriends = ["Waill", "Mazin"];

console.log(`%clet allFfiends = myFriends.concat(myNewfriends, schoolFriends, "Gamal", [1, 2]);`, "color:#12fd90;");
let allFfiends = myFriends.concat(myNewfriends, schoolFriends, "Gamal", [1, 2]);
console.log(`%cconsole.log(allFfiends);`, "color:#5ddd;");
console.log(allFfiends);

console.log(`%cconsole.log(allFfiends.join());`, "color:#5ddd;");
console.log(allFfiends.join());

console.log(`%cconsole.log(allFfiends.join(""));`, "color:#5ddd;");
console.log(allFfiends.join(""));

console.log(`%cconsole.log(allFfiends.join(" "));`, "color:#5ddd;");
console.log(allFfiends.join(" "));

console.log(`%cconsole.log(allFfiends.join("-"));`, "color:#5ddd;");
console.log(allFfiends.join("-"));

console.log(`%cconsole.log(allFfiends.join("|").toUpperCase());`, "color:#5ddd;");
console.log(allFfiends.join("|").toUpperCase());