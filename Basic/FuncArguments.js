// const arr=[1,2,3,4,5,6,7,8];
let arr=[];

function addAll(){
    let sum=0;

    for(let num of arguments){
        sum+=num;}

    console.log(arguments);

    arr=[...arguments];
    console.log(arr);
    
    return sum;
}


console.log(addAll(1,2,3,4,5,6,7,8));