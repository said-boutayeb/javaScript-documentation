/*
-------------Logical Or || 
-----::> Null + Undefined + Any Falsy Value

-------------Nullish Coalescing Operator ??
-----::> Null + Undefined
*/


console.log("%cLogical Or || ", "color:#dff2df; font-size:23px")

console.log(`%clet price = null;`, "color:#dff229; font-size:20px");
let price = null;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price || "free"}`);


console.log(`%cprice = undefined;`, "color:#dff229; font-size:20px");
price = undefined;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price || "free"}`);


console.log(`%cprice = 0;`, "color:#dff229; font-size:20px");
price = 0;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price || "free"}`);


console.log(`%cprice = false;`, "color:#dff229; font-size:20px");
price = false;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price || "free"}`);


console.log(`%cprice = "";`, "color:#dff229; font-size:20px");
price = "";

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price || "free"}`);




console.log("%cNullish Coalescing Operator ?? ", "color:#dff2df; font-size:23px")


console.log(`%cprice = "";`, "color:#dff229; font-size:20px");
price = "";

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price ?? "free"}`);


console.log(`%cprice = 0;`, "color:#dff229; font-size:20px");
price = 0;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price ?? "free"}`);


console.log(`%cprice = false;`, "color:#dff229; font-size:20px");
price = false;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price ?? "free"}`);


console.log(`%cprice = null;`, "color:#dff229; font-size:20px");
price = null;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price ?? "free"}`);


console.log(`%cprice = undefined;`, "color:#dff229; font-size:20px");
price = undefined;

console.log('%cconsole.log(`the price is ${price || "free"}`)', "color:#34f4d5;");
console.log(`the price is ${price ?? "free"}`);
