function solution(a, b) {
  let answer = 0;
  let result1 = a.toString();
  let result2 = b.toString();
  result3 = result1 + result2;
  result4 = 2 * a * b;
  result5 = parseInt(result3);
  if(result3 > result4) {
    return result5;
  } else {
    return result4;
  }
}

console.log(solution(1,25));