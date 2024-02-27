function solution(myStr) {
  var answer = [];
  var temp = '';
  for(let i = 0; i < myStr.length; i++) {
    if(myStr[i].includes('a') || myStr[i].includes('b') || myStr[i].includes('c')) {
      if(temp !== '') {
        answer.push(temp);
      }
      temp = '';
    } else {
      temp += myStr[i];
    }
  }

  if(temp !== '') {
    answer.push(temp);
  }

  if(answer.length === 0) {
    answer.push('EMPTY');
  }
  return answer;
}

function solution2(myStr) {
  let result = [];
  let tempStr = ""; // 현재까지의 문자열을 임시 저장할 변수

  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === 'a' || myStr[i] === 'b' || myStr[i] === 'c') {
      if (tempStr !== "") {
        result.push(tempStr); // 'a', 'b', 'c' 이전의 문자열을 결과 배열에 추가
      }
      tempStr = ""; // 임시 문자열을 초기화
    } else {
      tempStr += myStr[i]; // 'a', 'b', 'c'가 아닌 문자를 임시 문자열에 추가
    }
  }

  if (tempStr !== "") {
    result.push(tempStr); // 마지막에 남은 문자열이 있다면 추가
  }

  return result;
}

console.log(solution('abcdeabc')); // 'de'
console.log(solution2('baconlettucetomate')); // 'ba', 'onlettucetomate'