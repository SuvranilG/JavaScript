let arr1=[1,2,3,4,5,6];
let arr2=[1,2,3,4,5,6];

const arrayCompare=(a,b) =>{

    for(let i=0;i<a.length;i++){

        if(a[i]!==b[i]){
            return false;
        }
    }   
    return true;

    
}

console.log(arrayCompare(arr1,arr2));