function solution(x1, x2, x3, x4) {
  var answer = true;
  var x = [x1, x2, x3, x4];
  if((x[0] || x[1]) && (x[2] || x[3])) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}