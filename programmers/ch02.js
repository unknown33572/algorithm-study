function solution(names) {
  var answer = [];
  for(let i = 0; i < names.length; i += 5) {
      answer.push(names[i]);
  }
  return answer;
}

const dummy = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];

console.log(solution(dummy));