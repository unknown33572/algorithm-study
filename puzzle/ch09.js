const dummy = [2,3,1,5,6];

function sort(arr) {
  let len = arr.length;
  let tmp;
  for(let i = 0; i < len; i++) {
    for(let j = len - 1; j > i; j--) {
      if(arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
}
let sortedDummy = sort(dummy);
console.log(sortedDummy);