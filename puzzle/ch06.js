function is_loop(n) {
  let check = n * 3 + 1;
  while(check !== 1) {
    check = check % 2 === 0 ? check / 2 : check * 3 + 1;
    if(check === n) {
      return true;
    }
  }
  return false;
}

let cnt = 0;
for(let i = 2; i <= 1000; i += 2) {
  if(is_loop(i)) {
    cnt += 1;
  }
}

console.log(cnt);
