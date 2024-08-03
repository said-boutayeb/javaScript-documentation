/*
------ Arrays Methods [slicing]
-----::> slice(start [Opt], End [Opt] Not Including End)
--------::> slice() => All Array 
--------::> If Start Is Undefind => 0
--------::> Negative Count From End
--------::> If End Undefind || > Indexes => Slice To The End Array.length
--------::> Return New Array 
-----::> splice(Start [Mand], DeletCount [Opt] [0 No Remov], The Items To Add [Opt])
--------::> If Negative => Start From End

*/
//-----::> index start from 0 [0, 1, 2, 3]
console.log(`%clet myFriends = ["Ahmed", 2, 3, 4, "Mohamed", "Sayed", "Alaa", "Said", "Fouad"];`, "color:red; font-size:16px;");
let myFriends = ["Ahmed", 2, 3, 4, "Mohamed", "Sayed", "Alaa", "Said", "Fouad",];

//-----::> slice(start[Opt], End[Opt] Not Including End)
console.log(`%cconsole.log(myFriends.slice());`, "color:#5ddd;");
console.log(myFriends.slice());

console.log(`%cconsole.log(myFriends.slice(1));`, "color:#5ddd;");
console.log(myFriends.slice(1));

console.log(`%cconsole.log(myFriends.slice(1, 3));`, "color:#5ddd;");
console.log(myFriends.slice(1, 3));

console.log(`%cconsole.log(myFriends.slice(-3));`, "color:#5ddd;");
console.log(myFriends.slice(-3));

console.log(`%cconsole.log(myFriends.slice(1, -2));`, "color:#5ddd;");
console.log(myFriends.slice(1, -2));

console.log(`%cconsole.log(myFriends.slice(-4, -2));`, "color:#5ddd;");
console.log(myFriends.slice(-4, -2));

console.log(`%cconsole.log(myFriends)`, "color:#5ddd;");
console.log(myFriends);


//-----::> splice(Start[Mand], DeletCount[Opt][0 No Remov], The Items To Add[Opt]);
console.log(`%cmyFriends.splice(0, 0, "Add: 1");`, "color:#12fd90;");
myFriends.splice(0, 0, "Add: 1");
console.log(`%cconsole.log(myFriends)`, "color:#5ddd;");
console.log(myFriends);


console.log(`%cmyFriends.splice(3, 0, "Add: 2");`, "color:#12fd90;");
myFriends.splice(3, 0, "Add: 2");
console.log(`%cconsole.log(myFriends)`, "color:#5ddd;");
console.log(myFriends);


console.log(`%cmyFriends.splice(4, 1, "Add: 3");`, "color:#12fd90;");
myFriends.splice(4, 1, "Add: 3");
console.log(`%cconsole.log(myFriends)`, "color:#5ddd;");
console.log(myFriends);


console.log(`%cmyFriends.splice(1, 2);`, "color:#12fd90;");
myFriends.splice(1, 2);
console.log(`%cconsole.log(myFriends)`, "color:#5ddd;");
console.log(myFriends);

console.log('%cmyFriends.splice(3, 1, "Add: 4", "Add: 5");', "color:#12fd90;");
myFriends.splice(3, 1, "Add: 4", "Add: 5");
console.log(`%cconsole.log(myFriends)`, "color:#5ddd;");
console.log(myFriends);