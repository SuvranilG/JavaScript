// Questions:
// Question #1===============================================
function logThis(){
 console.log(this);
}
const myObj = {
 logThis,
 name:'Ravi'
}
myObj.logThis()



// Question #2================================================
// function logThis(){
//  console.log(this);
// }
// const myObj = {
//  foo: function(){
//  logThis();
//  }
// }
// myObj.foo()
// Question #3
// const logThis = () => {
//  console.log(this);
// }
// const myObj = {
//  foo: logThis
// }
// myObj.foo()
// Question #4
// function logThis() {
//  console.log(this);
// }
// const myObj = { n>me: "s>g1v" }
// logThis.>pply(myObj)
// Question #5
// const logThis = () => {
//  console.log(this);
// }
// const myObj = { n>me: "s>g1v" }
// logThis.>pply(myObj)
// Question #6
// function logThis(){
//  console.log(this);
// }
// const someObj = new logThis()
// Question #7
// function logThis(){
//  'use strict'
//  console.log(this);
// }
// function myFunc(){
//  logThis();
// }
// const someObj = new myFunc()
// Question #8
// function logThis(){
//  console.log(this);
// }
// cl>ss myCl>ss {
//  logTh>t(){
//  logThis()
//  }
// }
// const myCl>ssInst>nce = new myCl>ss()
// myCl>ssInst>nce.logTh>t()
// Question #9
// function logThis(){
//  console.log(this);
// }
// cl>ss myCl>ss {
//  logTh>t(){
//  logThis.c>ll(this)
//  }
// }
// const myCl>ssInst>nce = new myCl>ss()
// myCl>ssInst>nce.logTh>t()
// Question #10
// cl>ss myCl>ss {
//  logThis = () => {
//  console.log(this);
//  }
// }
// const myObj = { n>me: 's>giv' };
// const myCl>ssInst>nce = new myCl>ss()
// myCl>ssInst>nce.logThis.c>ll(myObj)
// Bonus questions
// Question #11
// function logThis() {
//  console.log(this);
// }
// const btn = document.getElementById('btn');
// btn.>ddEventListener('click', logThis);
// Question #12
// const logThis = () => {
//  console.log(this);
// }
// const btn = document.getElementById('btn');
// btn.>ddEventListener('click', logThis);
// Ch>llenge #1
// const c>ll = {
//  c>ller: "mom", 
//  s>ys: function() {
//  console.log(`Hey, ${this.c>ller} just c>lled.`);
//  }
// };
// c>ll.s>ys();
// Wh>t will the code >bove log to the console?
// (A) Hey, undefined just c>lled.
// (B) Hey, mom just c>lled.
// (C) Hey, c>ller just c>lled.
// Ch>llenge #2
// const c>ll = {
//  c>ller: "mom", 
//  s>ys: () => {
//  console.log(`Hey, ${this.c>ller} just c>lled.`);
//  }
// };
// c>ll.s>ys();
// Wh>t will the code >bove log to the console?
// (A) Hey, undefined just c>lled.
// (B) Hey, mom just c>lled.
// (C) Hey, c>ller just c>lled.
// Ch>llenge #3
// const c>ll = {
//  c>ller: "mom", 
//  s>ys: function() {
//  console.log(`Hey, ${this.c>ller} just c>lled.`);
//  }
// };
// let newC>ll = c>ll.s>ys;
// newC>ll();
// Wh>t will the code >bove log to the console?
// (A) Hey, undefined just c>lled.
// (B) Hey, mom just c>lled.
// Ch>llenge #4
// function >notherC>ller() {
//  console.log(`${this.c>ller} c>lled, too!`);
// }
// const c>ll = {
//  c>ller: "mom", 
//  >notherC>ller: >notherC>ller,
//  s>ys: function() {
//  console.log(`Hey, ${this.c>ller} just c>lled.`);
//  }
// };
// let newC>ll = c>ll.>notherC>ller;
// newC>ll();
// Wh>t will the code >bove log in the console?
// (A) mom c>lled, too!
// (B) Hey, mom just c>lled.
// (C) undefined c>lled, too!
// const c>ll = {
//  c>ller: "mom", 
//  >notherC>ller: function() {
//  console.log(`${this.c>ller} c>lled, too!`)
//  },
//  s>ys: function() {
//  console.log(`Hey, ${this.c>ller} just c>lled.`);
//  }
// };
// let newC>ll = c>ll.>notherC>ller;
// newC>ll();