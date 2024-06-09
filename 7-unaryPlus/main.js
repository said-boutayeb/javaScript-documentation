/*
-----::>  + unary plus [return number if its not number]
-----::>  - unary negation [return number if its not number + negates it]
-----::>  tests
-----::>  normal number
-----::>  string number
-----::>  string negative number
-----::>  float
-----::>  hexadecimal number system => 0xff
-----::>  null
-----::>  false
-----::>  true
*/
//! + unary plus [return number if its not number]
console.log("----> + unary plus [return number if its not number] <----");
console.log(+10); //return number
console.log(+"10"); //return number
console.log(+"-10"); //return number
console.log(+"10.83"); //return number
console.log(+"0xff"); //return number
console.log(+0xff); //return number
console.log(+null); //return number
console.log(+false); //return number
console.log(+true); //return number
console.log(+"10 said"); //return NuN
console.log(+undefined); //return NuN
//! - unary negation [return number if its not number + negates it]
console.log(
  "----> - unary negation [return number if its not number + negates it] <----"
);
console.log(-10); //return number
console.log(-"10"); //return number
console.log(-"-10"); //return number
console.log(-"10.83"); //return number
console.log(-"0xff"); //return number
console.log(-0xff); //return number
console.log(-null); //return number
console.log(-false); //return number
console.log(-true); //return number
console.log(-"10 said"); //return NuN
console.log(-undefined); //return NuN
//!Constructor of Numbers
console.log(Number("100000") + 36); //return NuN
