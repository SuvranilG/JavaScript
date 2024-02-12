let arr=[10,20,30];



function toThePower(funcArr, power){
    let tempArr=[];
    // for(let num of funcArr) {
    //     tempArr.push(num**power);
    // }

    for(let num in funcArr) {
        tempArr.push(funcArr[num]**power);
    }

    return tempArr;

}


let raisedToPower = toThePower(arr,2);
console.log(raisedToPower);

