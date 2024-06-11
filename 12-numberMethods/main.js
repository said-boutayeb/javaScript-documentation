/*
-----------Number Methods
-----::> Two Dats To Call A Methods
-----::> toString()
-----::> toFixed()
-----::> parseInt()
-----::> parseFloat()
-----::> isInteger() ::> [ES6]
-----::> isNaN() ::> [ES6]

*/
//-----------------------::> toString()
console.log("%c-----------------------toString()", "color:red;");
console.log("console.log((222).toString())");
console.log((222).toString());
console.log("console.log(222.0.toString())");
console.log(222.0.toString());
console.log("console.log(222..toString())");
console.log(222..toString());
//-----------------------::> toFixed()
console.log("%c-----------------------toFixed()", "color:red;");
console.log("console.log(222.3293736.toFixed(2))");
console.log(222.3293736.toFixed(2));
//-----------------------::> parseInt()
console.log("%c-----------------------parseInt()", "color:red;");
console.log('console.log(parseInt("222.222 word"))');
console.log(parseInt("222.222 word"));//parseInt smart

console.log('console.log(parseInt("word 222.222 "))::>%c not enough intelligence', "color:#71e22b;");
console.log(parseInt("word 222.222 "));//not enough intelligence
//-----------------------::> parseFloat()
console.log("%c-----------------------parseFloat()", "color:red;");
console.log('console.log(parseInt("222.222 word"))');
console.log(parseFloat("222.222 word"));

console.log('console.log(parseFloat("word 222.222 "))::>%c not enough intelligence', "color:#71e22b;");
console.log(parseFloat("word 222.222 "));//not enough intelligence
//same thing with a slight difference
console.log("%c same thing with a slight difference", "color:red ; font-size:20px;");

console.log('console.log(Number("222.222"))');
console.log(Number("222.222"));
console.log('console.log(Number("222.222 word"))::>%c here we cannot add word', "color:#71e22b;");
console.log(Number("222.222 word"));

console.log('console.log(+"222.222")');
console.log(+"222.222");
console.log('console.log(+"222.222 word")::>%c here we cannot add word', "color:#71e22b;");
console.log(+"222.222 word");//::> here we cannot add said
//-----------------------::> isInteger() ::> [ES6]
console.log("%c-----------------------isInteger() ::> [ES6]", "color:red;");
console.log("console.log(Number.isInteger(222))");
console.log(Number.isInteger(222));
console.log('console.log(Number.isInteger("222"))');
console.log(Number.isInteger("222"));
console.log('console.log(Number.isInteger(222.222))');
console.log(Number.isInteger(222.222));
//-----------------------::> isNaN() ::> [ES6]
console.log("%c-----------------------isNaN() ::> [ES6]", "color:red;");
console.log('console.log(Number.isNaN("string" / 222))');
console.log(Number.isNaN("string" / 222));
console.log('console.log(typeof "string" / 222)');
console.log(typeof "string" / 222);