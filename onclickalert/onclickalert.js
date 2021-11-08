// function onClickAlert(){
//     alert("You Clicked Me!");
// }
// window.x = 250;
// function f(y){
// 	var x = 100;
//   return y*this.x;
// }
// alert(f(1000));
// emp = {name:"John",x:4,y:8};
// emp.g = function(z){
// 	return z*this.x
// };
// alert(emp.g(3));

const promise = new Promise(
    (resolve, reject) => { 
        resolve("Hattori");
    setTimeout(()=> reject("Yoshi"), 500); 
});
promise.then(val => console.log("Success: " + val)).catch(e => console.log("Error: " + e));
console.log("blue");

// var a=10;
// function f(){
//   var b = 20;
//   function g(){
//   	var c = a+b;
//     return c;
//   }
//   b = 30;
//   return g;
// }
// myFunc = f();
// x = myFunc();
// alert(x);
// a = 100;
// y = myFunc();
// alert(y);

// var b = 1000;
// function g(){
// 	var a = 100;
//   b = 10;
//   var z = a+b;
//   alert(z);
//   function f(z){
//   	return 2*z;
//   }
//   var b = 20;
//   alert(f(b));
// }
// g();
// alert(b);

