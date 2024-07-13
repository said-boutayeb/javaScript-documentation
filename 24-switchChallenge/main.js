/*
------ swich challenge
*/
console.log(`let job = "Support";
let salary = 0;

%cif (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}`,"color:#978979")
let job = "Support";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}
// answer
console.log(`%cAnswer
    %cswitch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log("default");
}
`, "color:#dd8291", "color:#12fd90")
switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log("default");
}

/*
------ if challenge
*/

