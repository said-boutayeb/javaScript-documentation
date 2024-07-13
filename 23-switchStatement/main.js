/*
------ switch Statement
-----::> example
switch(expression){
case 1:
    // block of code
    break;
case 2;
    // block of code
    break;
default:
    //block of code
}
-----::> default ordering
-----::> multiple match
-----::> ==
*/
console.log("%clet day = 2;", "color:red; font-size:20px;");
let day = 2;
console.log(`%cswitch (day) {
    case 1:
        console.log("day:" + day + " (case 1)");
        break;
    case 2:
        console.log("day:" + day + " (case 2)");
        break;
    case 3:
        console.log("day:" + day + " (case 3)");
        break;
    default:
        console.log("default");
}
`, "color:#8932df;");
switch (day) {
    case 1:
        console.log("day:" + day + " (case 1)");
        break;
    case 2:
        console.log("day:" + day + " (case 2)");
        break;
    case 3:
        console.log("day:" + day + " (case 3)");
        break;
    default:
        console.log("default");
}
console.log(`%cswitch (day) {
    case 1:
        console.log("day:" + day + " (case 1)");
        break;
    case 2:
    case 3:
        console.log("day:" + day + " (case 2 + 3)");
        break;
    case 4:
        console.log("day:" + day + " (case 3)");
        break;
    default:
        console.log("default");
}
`, "color:#8932df;");
switch (day) {
    case 1:
        console.log("day:" + day + " (case 1)");
        break;
    case 2:
    case 3:
        console.log("day:" + day + " (case 2 + 3)");
        break;
    case 4:
        console.log("day:" + day + " (case 3)");
        break;
    default:
        console.log("default");
}
