

let reverseString=(s)=> {
    //write your code here
    var newString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}
  
console.log(reverseString("Suvranil"));

