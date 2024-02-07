function solution(numLog) {
  let answer = '';
  for(let i = 0; i <= numLog.length; i++) {
    if(numLog[i] - numLog[i - 1] === 1) {
      answer += 'w';
    } else if(numLog[i] - numLog[i - 1] === -1) {
      answer += 's';
    } else if(numLog[i] - numLog[i - 1] === 10) {
      answer += 'd';
    } else if(numLog[i] - numLog[i - 1] === -2) {
      answer += 's';
    } else if(numLog[i] - numLog[i - 1] === -10){
      answer += 'a';
    } else {
      answer += '';
    }
  }

  return answer;
}

function solution(numLog) {
  const convert = {
      '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
  };

  return numLog.slice(1).map((v, i) => {
      return convert[v - numLog[i]]
  }).join('')
}