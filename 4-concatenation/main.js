/*
-----::> concatenation
-----::> concatenation string with string
-----::> concatenation string with number
-----::> concatenation number with number
-----::> concatenation tamplate literals with (``)
*/
//?----------------string with string----------------
let varOne = "we can concatenation string with string like: (string + "; //--this is string
let varTow = "string)"; //---------------------------------------------------this is string
console.log(varOne + varTow);
//?----------------string with number----------------
let varStr = "we can concatenation string with number like: (string + "; //--this is string
let varNum = 10; //----------------------------------------------------------this is number
console.log(varStr + varNum + ")");
//?----------------number with number----------------
let varNumOne = 10;//--------------------------------------------------------this is number
let varNumTow = 10;//--------------------------------------------------------this is number
console.log(
  "with just number and number work like: (varNumOne + varNumTow) = " +
  (varNumOne + varNumTow)
);
//?----------------concatenation tamplate literals with (``)----------------
let varString = "string";//--------------------------------------------------this is string
let varNumber = 20;//--------------------------------------------------------this is number
console.log(
  `we can use tamplate literals \`\` for concatenation anything here like: "${varString}" or number like
  "('${varNumber + varNumber}' + ${varNumber})"`
);
