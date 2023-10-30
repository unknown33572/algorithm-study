const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('n 값을 입력하세요: ', (n) => {
  rl.question('m 값을 입력하세요: ', (m) => {
    let r = '';
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            r += '*';
        }
        r += '\n';
    }
    console.log(r);
    rl.close();
  });
});
