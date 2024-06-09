/*
-----::>  type coercion (type casting)
-----::>  +
-----::>  -
-----::>  "" - number
-----::>  false - true
*/
let a = "10";
let b = 5;
let c = true;
let d = "said";
console.log(`let a = "10"; 
let b = 5;
let c = true;
let d = "said";`); //information
console.log('("10" + 5)'); //explain
console.log(a + b);
console.log('(+"10" + 5)'); //explainw
console.log(+a + b);
console.log('("10" - 5)'); //explain
console.log(a - b);
console.log('("10" + true)'); //explain
console.log(a + c);
console.log("(5 + true)"); //explain
console.log(b + c);
console.log('("10" + 5 + true)'); //explain
console.log(a + b + c);
console.log('(+"10" + 5 + true)'); //explain
console.log(+a + b + c);
console.log('(5 + true + "10")'); //explain
console.log( b + c + a );
console.log('(+"10" + 5 + true + "said")'); //explain
console.log(+a + b + c + d);

