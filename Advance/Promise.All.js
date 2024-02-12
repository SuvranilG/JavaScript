let Promise1 = new Promise((resolve)=>setTimeout(()=>resolve("Promise 1 resovled"),1000)); //Promise can be passed only resolve as well
let Promise2 = new Promise((resolve)=>setTimeout(()=>resolve("Promise 2 resovled"),2000)); 
let Promise3 = new Promise((resolve)=>setTimeout(()=>resolve("Promise 3 resovled"),3000)); 


// Promise1.then((res)=>console.log(res));
// Promise2.then((res)=>console.log(res));
// Promise3.then((res)=>console.log(res));


let ArrOfPromises=[Promise1,Promise2,Promise3];
let Promises= Promise.all(ArrOfPromises);
console.log(Promises);