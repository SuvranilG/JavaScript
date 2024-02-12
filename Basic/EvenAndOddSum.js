let arr=[1,2,3,4,5,6,7,8,9];


let result =arr.reduce((acc,cur)=>(cur%2===0)?{...acc,even:acc.even+cur}:{ ...acc,odd:acc.odd+cur},{"even":0,"odd":0});
console.log(result);






// ternary format
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = arr.reduce((acc, cur) => (cur % 2 === 0) ? { ...acc, even: acc.even + cur } : { ...acc, odd: acc.odd + cur }, { even: 0, odd: 0 });

// console.log(result);












// if-else format
// let arr = [1,2,3,4,5,6,7,8,9];

// let result = arr.reduce((acc, cur) => {
//   if (cur % 2 === 0) {
//     acc.even += cur;
//   } else {
//     acc.odd += cur;
//   }
//   return acc;
// }, { even: 0, odd: 0 });

// console.log(result);
