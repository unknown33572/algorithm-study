function solution(arr, n) {
  let answer = [];
  if(arr.length % 2 == 1) {
    for(let i = 0; i < arr.length; i++) {
      if(i % 2 == 0){
        arr[i] += n;
      }
      answer[i] = arr[i];
    }
  } else {
    for(let i = 0; i < arr.length; i++) {
      if(i % 2 == 1){
        arr[i] += n;
      }
      answer[i] = arr[i];
    }
  }
  return answer;
}