/*
-------------conditional (Ternary) Operator

Condition ? If True : If False

*/
console.log("%c-------------conditional (Ternary) Operator", "color:#d42425; font-size: 20px;");

let theName = "Said";
let theGender = "Male";
let theAge = 30;

console.log(`let theName = "Said";
let theGender = "Male";
let theAge = 30;`);

console.log(`%cNormall conditonal
%cif (theGender === "Male") {
console.log("Mr");
} else {
console.log("Mrs)
}`, "font-size:20px;", "color:#dff229;");

console.log(`%ctheGender === "Male" ? console.log("Mr") : console.log("Mrs")`, "color:#34f4d5;");
theGender === "Male" ? console.log("Mr") : console.log("Mrs");


let result = theGender === "Male" ? "Mr" : "Mrs";
console.log('%cconsole.log(`hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);', "color:#34f4d5;");
console.log(`hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

console.log(`%ctheAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
    ? console.log("20 to 60")
    : theAge > 60
    ? console.log("Larger Than 60")
    : console.log("Unknown");`, "color:#34f4d5;");
theAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
        ? console.log("20 to 60")
        : theAge > 60
            ? console.log("Larger Than 60")
            : console.log("Unknown");
