function maskStrOfChar(strOfChar) {
    let maskedStr="";
    for (let index = 0; index < strOfChar.length; index++) {
        if(index%2!==0){
            maskedStr=maskedStr+strOfChar[index];
        }else{
            maskedStr=maskedStr+"#";
        }
        
    }
    return maskedStr;
}


console.log(maskStrOfChar("suvranilghose"));