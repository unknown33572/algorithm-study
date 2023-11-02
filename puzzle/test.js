function coinChanger() {
  let coins = [500, 100, 50, 10];
  let cnt = [0, 0, 0, 0];
  let price = 1260;
  
  for(let i = 0; i < coins.length; i++) {
    cnt[i] = parseInt(price / coins[i]);
    price = price % coins[i]; // 나머지 값으로 다음 코인을 계산하기 위해 price를 재정의
  }

  console.log(cnt);
}

coinChanger();