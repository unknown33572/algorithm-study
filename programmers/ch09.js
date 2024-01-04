function solution(num_list) {
  let answer = [];
  let len = num_list.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (num_list[j] > num_list[j + 1]) {
        let temp = num_list[j];
        num_list[j] = num_list[j + 1];
        num_list[j + 1] = temp;
      }
    }
  }

  for(let i = 0; i < 5; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];

console.log(solution(arr));