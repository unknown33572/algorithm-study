function sudoku(x, y) {
  let arr = [];
  for(let i = 0; i < x; i++) {
    arr.push([]);
    for(let j = 0; j < y; j++) {
      arr[i].push(j);
    }
  }
  return arr;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
rl.question('당신의 이름은 무엇인가요? ', (answer) => {
  // 사용자의 입력 처리
  console.log(`안녕하세요, ${answer}님!`);

  // readline 인터페이스 닫기
  rl.close();
});
*/

/*
rl.question('x, y: ', (answer) => {
  let [x, y] = answer.split(', ');
  let arr = sudoku(x, y);
  console.log(arr);
  rl.close();
});
*/

rl.question('입력: ', (n) => {
  let n1 = n % 10;
  let n10 = Math.floor(n % 100 / 10);
  let n100 = Math.floor(n / 100);

  const arr = [];

  arr.push(n1);
  arr.push(n10);
  arr.push(n100);

  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);

  rl.close();
})

/*
123456789
123456789
123456789
123456789
123456789
123456789
123456789
123456789
123456789
*/

/*
123456...
123456789
123456789
123456789
123...789
123456789
123456789
123456789
...456789
*/