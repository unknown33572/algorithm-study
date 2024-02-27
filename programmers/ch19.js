/*
function solution(strArr) {
  var answer = 0;
  var arr = [];
  for(var i = 0; i < strArr.length; i++) {
    arr[i] = strArr[i].length;
  }
  console.log(arr);
  return answer;
}

console.log(solution(['a','ab','abc','b','cd','c']));
*/

function solution(strArr) {
  var answer = 0;
  var arr = [];
  var lengthFreq = {};
  var maxFreq = 0;
  var maxLen = 0;

  for(var i = 0; i < strArr.length; i++) {
    arr[i] = strArr[i].length;
    if(lengthFreq[arr[i]]) {
      lengthFreq[arr[i]]++;
    } else {
      lengthFreq[arr[i]] = 1;
    }
  }

  for(var key in lengthFreq) {
    if(lengthFreq[key]) {
      if(lengthFreq[key] > maxFreq) {
        maxFreq = lengthFreq[key];
        maxLen = parseInt(key);
      }
    }
  }

  answer = maxFreq;
  return answer;
}