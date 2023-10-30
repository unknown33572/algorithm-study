let star = '*';
let blank = ' ';
let result = '';

for(let i = 1; i <= 5; i++) {
    for(let j = 0; j < i; j++) {
      result += star;
    }
    result += '\n';
}

console.log(result);

for(let i = 1; i <= 5; i++) {
  for(let j = 5; j >= i; j--) {
    result += star;
  }
  result += '\n';
}

console.log(result);

const n = 4;
const m = 4;
let r = '';
for(let i = 0; i < n; i++) {
  if(i === 0) {
    r += '/';
  }
  if(i === n - 1) {
    r += '\\';
  }
  if(i === 1 || i === 2) {
    r += ' ';
  }
  for(let j = 0; j < m; j++) {
    if(i > 0 && i < n - 1 && j > 0 && j < m - 1) {
      r += ' ';
    } else {
      r += '*';
    }
    if(j === 3 && i === 0) {
      r += '\\';
    }
    if(j === 3 && i === 3) {
      r += '/';
    }
  }
    r += '\n';
}
console.log(r);