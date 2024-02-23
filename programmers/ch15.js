function solution(my_string, m, c) {
  var answer = '';
  var twoDimArr = [];
  for (let i = 0; i < my_string.length; i += m) {
    let temp = [];
    for(let j = i; j < i + m; j++) {
      if(j < my_string.length)
        temp.push(my_string[j]);
    }
    twoDimArr.push(temp);
  }
  for(let i = 0; i < twoDimArr.length; i++) {
      answer += twoDimArr[i][c - 1];
  }
  console.log(twoDimArr);
  console.log(answer);
}

solution("ihrhbakrfpndopljhygc", 4, 2);