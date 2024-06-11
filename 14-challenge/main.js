/*
----------Number Challenge
*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(`
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;`)
//find smallest Number in All variables And Return Integer
console.log('%cfind smallest Number in All variables And Return Integer', "color:#dd3398;");
console.log('Answer:%c console.log(Math.trunc(d))', "color:#00ff00; font-size:16px;");
console.log(Math.trunc(d));

//Use Varuable a + d One Time To Get The Needed Output
console.log('%cUse Varuable a + d One Time To Get The Needed Output', "color:#dd3398;");
console.log('Answer:%c console.log(Math.pow(a, Math.trunc(d)))', "color:#00ff00; font-size:16px;");
console.log(Math.pow(a, Math.trunc(d)));

//Get Integet "2" from d Variable With 4 Methods
console.log('%cGet Integet "2" from d Variable With 4 Methods', "color:#dd3398;");
console.log('Method: 1')
console.log('Answer:%c console.log(Math.round(d))', "color:#00ff00; font-size:16px;");
console.log(Math.round(d));
console.log('Method: 2')
console.log('Answer:%c console.log(Math.trunc(d))', "color:#00ff00; font-size:16px;");
console.log(Math.trunc(d));
console.log('Method: 3')
console.log('Answer:%c console.log(Math.min(a, b, c, Math.trunc(d)))', "color:#00ff00; font-size:16px;");
console.log(Math.min(a, b, c, Math.trunc(d)));
console.log('Method: 4')
console.log("...");
//Use Variables b + d To Get This Values
console.log('%cUse Variables b + d To Get This Values', "color:#dd3398;");

console.log("Value 1: 66.67 String");//66.67 String
console.log('Answer:%c console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2))', "color:#00ff00; font-size:16px;");
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));

console.log("Value 1: 67 Number");//67 Number
console.log('Answer:%c console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)))', "color:#00ff00; font-size:16px;");
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)));