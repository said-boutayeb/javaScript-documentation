/*
-----------------------Arithmetic operators
-----::>  +   Addition
-----::>  -   Subtraction
-----::>  *   Multiplication
-----::>  /   Division
-----::>  **  Exponentiation (ES7)
-----::>  %   Modulus (division remainder)
-----::>  ++  Increment [ post / pre ]
-----::>  --  Decrement [ post / pre ]
*/
let numOne = 5;
let numTow = 2;
console.log(`numOne = ${numOne}\nnumTow = ${numTow}`);
//!-----------Addition
console.log("Addition: (numOne + numTow) = " + (numOne + numTow));
//!-----------Subtraction
console.log("Subtraction: (numOne - numTow) = " + (numOne - numTow));
console.log("Subtraction: (numTow - numOne) = " + (numTow - numOne));
//!-----------Multiplication
console.log("Multiplication: (numOne * numTow) = " + numOne * numTow);
//!-----------Division
console.log("Division: (numOne / numTow) = " + numOne / numTow);
console.log("Division: (numTow / numOne)= " + numTow / numOne);
//!-----------Exponentiation
console.log("Exponentiation: (numOne ** numTow) = " + numOne ** numTow);
console.log("Exponentiation: (numTow ** numOne) = " + numTow ** numOne);
//!-----------Modulus
console.log("Modulus: (numOne % numTow) = " + (numOne % numTow));
console.log("Modulus: (numTow % numOne) = " + (numTow % numOne));
//!-----------Increment [ post / pre ]
console.log("console.log(numOne++): " + numOne++);
console.log("console.log(numOne): " + numOne);
console.log("console.log(++numTow): " + ++numTow);
//!-----------Decrement [ post / pre ]
console.log("console.log(--numTow): " + --numTow);
console.log("console.log(numTow--): " + numTow--);
console.log("console.log(numTow): " + numTow);
//!-----------NaN
console.log("can't" - numOne)
