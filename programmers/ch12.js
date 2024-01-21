function solution(arr1, arr2) {
  let answer;
  let result1 = 0;
  let result2 = 0;
  for(let i = 0; i < arr1.length; i++) {
    result1 += arr1[i];
  }
  for(let i = 0; i < arr2.length; i++) {
    result2 += arr2[i];
  }
  if(arr1.length == arr2.length) {
    if(result1 > result2) {
      answer = 1;
    } else if(result1 == result2) {
      answer = 0;
    } else {
      answer = -1;
    }
  } else if (arr1.length < arr2.length) {
    answer = -1;
  } else {
    answer = 1;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4], [1, 2, 3, 4, 5]));