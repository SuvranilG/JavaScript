/**
 * Q2: Reverse words of a string without changing their order
 *
 * Input: react is a library
 * Outut: tcaer si a yrarbil
 */

const str = "react is a library";

function ReverseWordsByChar(str) {
    let arrOfWords = str.split(" ");
    let reversedArrOfWord=arrOfWords.map(word=>word.split("").reverse().join(""));
    // console.log(reversedArrOfWord);
    // console.log(arrOfWords);
    return reversedArrOfWord.join(" ");
}


let result= ReverseWordsByChar(str);
console.log(result);