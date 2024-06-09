/*
//-- var 
1:----- redeclare (Yes)
2:----- access before declare (undefined)
3:----- variable scope drama [added to window] (we can added to windoww)
4:----- block or function scope

//-- let 
1:----- redeclare (No ::> error)
2:----- access before declare (Error)
3:----- variable scope drama [not added to window] (we can't added to window)
4:----- block or function scope
---------------------------------------------------------------
//-- const 
1:----- redeclare (No ::> error)
2:----- access before declare (Error)
3:----- variable scope drama [ not added to window] (we can't added to window)
4:----- block or function scope
*/
////--------------------------------- test 1 ---------------------------------
console.log("----------------test 1----------------");
//? redeclare by var
var a = 10;
var a = "redeclare by var ::> no error we can redeclare"; //----------Yes We can redeclare
console.log(a);
//? redeclare by let
let as = "redeclare by let ::> error";
//let as = 10; // ------No We can't redeclare ::> error
console.log(as);
//? redeclare by const
const asd = "redeclare by const ::> error";
//const asd = 10; //----No We can't redeclare ::> error
console.log(asd);
////--------------------------------- test 2 ---------------------------------
console.log("----------------test 2----------------");
//?access before declare by var
console.log(x); //--undefined ::> that's can't find error
var x = 200;
//?access before declare by let
// console.log(o); //::> can't find it ::> error
let o = 200;
//?access before declare by const
//console.log(f); //::> can't find it ::> error
const f = 200;
////--------------------------------- test 3 ---------------------------------
console.log("----------------test 3----------------");
//?variable scope drama whit var
var find = "window.find ::> added to window object";
console.log(find);
//?variable scope drama whit let
let notFindLet = "window.notFindLet ::> not added to window object";
console.log(notFindLet);
//?variable scope drama whit const
const notFindConst = "window.notFindConst ::> not added to window object";
console.log(notFindConst);
