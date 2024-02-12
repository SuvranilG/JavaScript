const arr1 =[1,2,3,4,511,34,65,47,98,6,7,];

let sortedArray = arr1.sort(sortInAscendingOrder);
console.log(sortedArray);

function sortInAscendingOrder(a,b){
    return a-b;
}