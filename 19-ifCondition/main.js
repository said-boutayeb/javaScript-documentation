/*
-------------Control Flow
-----::>  if
-----::>  else if
-----::>  else
-----::>  Nested If

if (condition) {
     //block of code
}

*/
console.log("%cIf Condition", "color:#d42425;");
console.log(`%clet price = 100;
let discount = false;
let discountAmount = 10;
let country = "Morocco";
let student = true;
`, "color:#dff229;")

console.log(`if (discount === true) {
    price -= discountAmount; 
}
else if (country === "Morocco") {
    if (student === true) {
        price -= 99;
    } else {
        price -= 79;
    }
}
else {
    price -= 50;
}

`)

let price = 100;
let discount = false;
let discountAmount = 10;
let country = "Morocco";
let student = true;

if (discount === true) {
    price -= discountAmount; //price = price - discountAmount
}
else if (country === "Morocco") {
    //-----::>  Nested If
    if (student === true) {
        price -= 99;
    } else {
        price -= 79;
    }
}
else {
    price -= 50;
}

console.log("%cResult", "color:#df3399;");
console.log(price);