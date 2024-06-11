/*
----------String Methods
-----::> Access With Index
-----::> Access With charAt()
-----::> length
-----::> tuUpperCase
-----::> toLowerCase
-----::> trim()
-----::> chain Methods

-----::> repeat(Times) [ES6]
-----::> indexOf(Value [Mand], Start [Opt] Defolte::> 0)
-----::> lastIndexOf(Value [Mand], Start [Opt] Defolte::> 0 length)
-----::> slice(start [Mand], End [Opt] Not Include End)
-----::> split(Separator [Opt], limit [Opt])

-----::> substrung(start [Mand], End [Opt] Not Inclouding End)
-----::> :::> start > End Will Swap
-----::> :::> start < 0 It start From 0
-----::> :::> Use Length To Get Last Character
-----::> substr(start [Mand], Characters To Extract)
-----::> :::> start >= length = ""
-----::> :::> Negative Start From End
-----::> includes(Value [Mand], Start [Opt] Default 0) [ES6]
-----::> startswith(Value [Mand], staet [Opt] Default 0) [ES6]
-----::> endswith(Value [Mand], length [Opt] Default Full length) [ES6]
*/
let theName = "Said";
console.log('%clet theName = "Said"', "color:#dd3398;");
//-----------------------::> Access with Index
console.log('-----------------------::>%c Access with Index', "color:red;");
console.log('console.log(theName[0])');
console.log(theName[0]);

console.log('-----------------------::>%c Access with charAt', "color:red;");
console.log('console.log(theName.charAt(0))');
console.log(theName.charAt(0));

console.log('-----------------------::>%c length', "color:red;");
console.log('console.log(theName.length)');
console.log(theName.length);

console.log('-----------------------::>%c toUpperCase', "color:red;");
console.log('console.log(theName.toUpperCase())');
console.log(theName.toUpperCase());

console.log('-----------------------::>%c toLowerCase', "color:red;");
console.log('console.log(theName.toUpperCase())');
console.log(theName.toLowerCase());

console.log('%cvar theNameSpace = "  said  "', "color:#dd3398;");
let theNameSpace = "  said  ";

console.log('-----------------------::>%c trim', "color:red;");
console.log('console.log(theNameSpace.trim())');
console.log(theNameSpace.trim());

console.log('-----------------------::>%c chain Methods', "color:red;");
console.log('console.log(theNameSpace.trim().charAt(1).toUpperCase())');
console.log(theNameSpace.trim().charAt(1).toUpperCase());


console.log('-----------------------::>%c repeat(Times) [ES6]', "color:red;");
console.log('console.log(theNameSpace.repeat(5))');
console.log(theNameSpace.repeat(5));

console.log('%clet theNameSentence = "said boutayeb dev websit is a web devloper"', "color:#dd3398;");
let theNameSentence = "said boutayeb dev websit is a web devloper";

console.log('-----------------------::>%c indexOf(Value [Mand], Start [Opt] Defolte::> 0)', "color:red;");
console.log('console.log(theNameSentence.indexOf("dev"))');
console.log(theNameSentence.indexOf("dev"));

console.log('console.log(theNameSentence.indexOf("dev",15))');
console.log(theNameSentence.indexOf("dev", 15));

console.log('console.log(theNameSentence.indexOf("dev",35))');
console.log(theNameSentence.indexOf("dev", 35));

console.log('-----------------------::>%c lastIndexOf(Value [Mand], Start [Opt] Defolte::> 0 length)', "color:red;");
console.log('console.log(theNameSentence.lastIndexOf("dev"))');
console.log(theNameSentence.lastIndexOf("dev"));

console.log('console.log(theNameSentence.lastIndexOf("dev",14))');
console.log(theNameSentence.lastIndexOf("dev", 14));

console.log('-----------------------::>%c slice(start [Mand], End [Opt] Not Include End)', "color:red;");
console.log('console.log(theNameSentence.slice(14,17))');
console.log(theNameSentence.slice(14, 17));

console.log('console.log(theNameSentence.slice(-8,-2))');
console.log(theNameSentence.slice(-8, -2));

console.log('-----------------------::>%c split(Separator [Opt], limit [Opt])', "color:red;");
console.log('console.log(theNameSentence.split())');
console.log(theNameSentence.split());
console.log('console.log(theNameSentence.split(""))');
console.log(theNameSentence.split(""));
console.log('console.log(theNameSentence.split("",4))');
console.log(theNameSentence.split("", 4));
console.log('console.log(theNameSentence.split(" "))');
console.log(theNameSentence.split(" "));
console.log('console.table(theNameSentence.split(" "))');
console.table(theNameSentence.split(" "));


console.log('-----------------------::>%c substrung(start [Mand], End [Opt] Not Inclouding End)', "color:red;");
console.log('console.log(theNameSentence.substring(14, 17))');
console.log(theNameSentence.substring(14, 17));

console.log('console.log(theNameSentence.substring(17, 14))');
console.log(theNameSentence.substring(17, 14));

console.log('console.log(theNameSentence.substring(-99, 13))');
console.log(theNameSentence.substring(-99, 13));

console.log('console.log(theNameSentence.length)');
console.log(theNameSentence.length);
console.log('console.log(theNameSentence.substring(theNameSentence.length - 8))');
console.log(theNameSentence.substring(theNameSentence.length - 8));
console.log('console.log(theNameSentence.substring(theNameSentence.length - 8, theNameSentence.length - 1))');
console.log(theNameSentence.substring(theNameSentence.length - 8, theNameSentence.length - 1));


console.log('-----------------------::>%c substr(start [Mand], Characters To Extract)', "color:red;");
console.log('console.log(theNameSentence.substr(0,4))');
console.log(theNameSentence.substr(0, 4));
console.log('console.log(theNameSentence.substr(42))');
console.log(theNameSentence.substr(42));
console.log('console.log(theNameSentence.substr(-8))');
console.log(theNameSentence.substr(-8));
console.log('console.log(theNameSentence.substr(-8, 7))');
console.log(theNameSentence.substr(-8, 7));


console.log(`%c${theNameSentence}` ,"color:#dd3398; font-size:18px;" )
console.log('-----------------------::>%c includes(Value [Mand], Start [Opt] Default 0) [ES6]', "color:red;");
console.log('console.log(theNameSentence.includes("dev"))');
console.log(theNameSentence.includes("dev"));

console.log('console.log(theNameSentence.includes("dev",18))');
console.log(theNameSentence.includes("dev",18));

console.log('console.log(theNameSentence.includes("dev",35))');
console.log(theNameSentence.includes("dev",35));


console.log('-----------------------::>%c startswith(Value [Mand], staet [Opt] Default 0) [ES6]', "color:red;");
console.log('console.log(theNameSentence.startsWith("dev", 34))');
console.log(theNameSentence.startsWith("dev", 34));
console.log('-----------------------::>%c startswith(Value [Mand], staet [Opt] Default 0) [ES6]', "color:red;");
console.log('console.log(theNameSentence.startsWith("dev", 34))');
console.log(theNameSentence.startsWith("dev", 34));

console.log('console.log(theNameSentence.startsWith("dev"))');
console.log(theNameSentence.startsWith("dev"));

console.log('console.log(theNameSentence.startsWith("dev", 33))');
console.log(theNameSentence.startsWith("dev", 33));

console.log('console.log(theNameSentence.startsWith("dev", 35))');
console.log(theNameSentence.startsWith("dev", 35));


console.log('-----------------------::>%c endswith(Value [Mand], length [Opt] Default Full length) [ES6]', "color:red;");
console.log('console.log(theNameSentence.endsWith("sit", 24))');
console.log(theNameSentence.endsWith("sit", 24));

console.log('console.log(theNameSentence.endsWith("sit", 24))');
console.log(theNameSentence.endsWith("sit"));

console.log('console.log(theNameSentence.endsWith("sit", 23))');
console.log(theNameSentence.endsWith("sit", 23));

console.log('console.log(theNameSentence.endsWith("sit", 25))');
console.log(theNameSentence.endsWith("sit", 25));























