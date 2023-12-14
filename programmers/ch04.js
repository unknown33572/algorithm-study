function solution(num_list, n) {
  let answer = [];
  let result = num_list.slice(0, n);
  let result2 = num_list.slice(n, num_list.length);
  answer = result2.concat(result);
  return answer;
}

console.log(solution([21, 2, 3, 14, 5, 46, 7, 8, 9], 4));