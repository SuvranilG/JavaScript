const str = "gfg is a comp science learning platform";
const arr = str.split(" ");
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.log(arr[i], arr[j]);

    if (arr[i].length > arr[j].length) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
const result = arr.join(" ");
console.log(result);
