const arr=["a","b","c","d","e","f",
"a","b","c","d","z","e","f","a","b","c","d","m","n","g","h","i","j","k","l"]


const result= arr.reduce((acc,cur)=>cur in acc ?{...acc,[cur]:acc[cur]+1}:{...acc,[cur]:1},{});
console.log(result);