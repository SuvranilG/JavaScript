function largestUsingForLoop(arr, n) {
    let max = arr[0];
for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

function largestUsingSort(arr, n) {
    // write your code here
    let copyArr = [...arr];
    //console.log(arr);
    //return copyArr.sort((a,b)=>b-a)[0];
    //return copyArr.sort((a,b)=>a-b)[-1]; // undefined
    return copyArr.sort((a,b)=>a-b)[arr.length - 1]; 

}

let arr =[1,2,3,467,4,5,67];

// console.log(largestUsingForLoop(arr,arr.length));
console.log(largestUsingSort(arr,arr.length));
//console.log(arr[-1]);// undefined

