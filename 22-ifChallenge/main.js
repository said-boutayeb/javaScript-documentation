/*
------ If Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}
a < 10 ? console.log(10)
    : a >= 10 && a <= 40
        ? console.log("10 To 40")
        : a > 40
            ? console.log("> 40")
            : console.log("Unknown");


// write with ternary if syntax
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good: 1");
};

// W poition msy chage

for (let i = 0; i < st.length; i++) {
    if (st.charAt(i) === "W") {
        console.log("Good: 2");
    }
};

if (typeof st === "string") {
    console.log("Good: 3");
};

if (typeof st.length === "number") {
    console.log("Good: 4");
};

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good: 5");
};
