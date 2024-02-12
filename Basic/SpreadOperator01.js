let arr1= [1,2,3];
let arr2= [4,5,6];
// Spread avoids mutation that means it doesn't change the array
let arr3=[...arr1,...arr2,7,8,9];

 console.log(arr3);
 console.log(...arr1);
 let arr4= [...[11,12,13]];

 console.log(...arr4);

 let arr5= [...arr1,...arr2,...arr3.splice(-3),10,...arr4];
 console.log(...arr5);