function solution(a, b) {
  let answer = 0;
  let aString = a.toString();
  let bString = b.toString();
  let resultA = aString + bString;
  let resultB = bString + aString;
  if(parseInt(resultA) > parseInt(resultB)) {
    answer = parseInt(resultA);
  } else if(parseInt(resultA) < parseInt(resultB)) {
      answer = parseInt(resultB);
  } else if(parseInt(resultA) == parseInt(resultB)) {
      answer = parseInt(resultA);
  }
  return answer;
}

console.log(solution(3, 2));
