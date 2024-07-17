/*
------ Arrays
-----::> creat arrays [two methods] new array() + []
-----::> access arrays eleements
-----::> nested arrays
-----::> change arrays elements
-----::> check for array array.isArray(arr);
*/
//-----::> creat arrays [two methods] new array() + []
console.log("%ccreat arrays [two methods] new array() + []", "color:red; font-size:18px;");
console.log(`%clet myFriends = ["saId", "ahmed", "alli"];`, "color:#529ddd;");

let myFriends = ["saId", "ahmed", "alli"];


//-----::> access arrays eleements
console.log("%caccess arrays eleements", "color:red; font-size:18px;");
console.log("%cconsole.log(`hello ${myFriends[0]}`)", "color:#5ddd;");

console.log(`hello ${myFriends[0]}`);

console.log("%cconsole.log(`hello ${myFriends[2]}`)", "color:#5ddd;");
console.log(`hello ${myFriends[2]}`);

console.log("%cconsole.log(`${myFriends[0][2]}`)", "color:#5ddd;");
console.log(`${myFriends[0][2]}`);


//-----::> nested arrays
console.log("%cnested arrays", "color:red; font-size:18px;");
console.log(`%cmyFriends = ["saId", "ahmed", "alli", [" marwa", "salMa"]];`, "color:#529ddd;");

myFriends = ["saId", "ahmed", "alli", [" marwa", "salMa"]];

console.log("%cconsole.log(`hello ${myFriends[3][1]}`)", "color:#5ddd;");
console.log(`hello ${myFriends[3][1]}`);

console.log("%cconsole.log(`${myFriends[3][1][3]}`);", "color:#5ddd;");
console.log(`${myFriends[3][1][3]}`);


//-----::> change arrays elements
console.log("%cchange arrays elements", "color:red; font-size:18px;");

console.log(`%cmyFriends[3][0] = "gamal";`, "color:#8932df;");
myFriends[3][0] = "gamal";

console.log("%cconsole.log(myFriends[3]);", "color:#5ddd;");
console.log(myFriends[3]);


//-----::> check for array array.isArray(arr);
console.log("%ccheck for array array.isArray(arr);", "color:red; font-size:18px;");

console.log("%cconsole.log(Array.isArray(myFriends))", "color:#5ddd;")
console.log(Array.isArray(myFriends))