/**
 * Count frequency of all number in an array, return the
 * numbers with the max frequency, if 2 or more numbers have
 * the same max freq then return the highest number
 */

const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];
let maxValue=0;
let maxKey = 0;
let arrKeys = [];

function numWithMaxFrequency(arr){
    const numberObj=arr.reduce((acc,cur)=>cur in acc? {  ...acc,[cur]:acc[cur]+1}:{  ...acc,[cur]:1},{});

    //For getting max frequency
    for (let key in numberObj){
        
        if (maxValue<numberObj[key]){
            maxValue = numberObj[key];
           
        }
    }

    // For getting arrKeys with max frequency
    for (let key in numberObj){
        
        if (maxValue==numberObj[key]){
            arrKeys.push(key);
        }
    }

    maxKey = arrKeys.reduce((a,b)=>b>a?b:a,0);


    return {[maxKey]:maxValue};
}
const result=numWithMaxFrequency(arr);
console.log(result); 

let copyArr=arr;
console.log(copyArr);