function rockPaperScissors(player) {
  console.log('가위 바위 보 게임입니다.');
  console.log('1: 가위, 2: 바위, 3: 보');
  console.log('숫자를 입력해주세요.');
  let computer = Math.floor(Math.random() * 3) + 1;
  console.log(computer);
  switch(player) {
    case 1:
      if(computer == 1) {
        console.log('computer: ' + '가위')
        console.log('player: ' + '가위')
        console.log('비겼습니다.');
      } else if(computer == 2) {
        console.log('computer: ' + '바위')
        console.log('player: ' + '가위')
        console.log('졌습니다.');
      } else {
        console.log('computer: ' + '보')
        console.log('player: ' + '가위')
        console.log('이겼습니다.');
      }
      break;
    case 2:
      if(computer == 1) {
        console.log('computer: ' + '가위')
        console.log('player: ' + '바위')
        console.log('이겼습니다.');
      } else if(computer == 2) {
        console.log('computer: ' + '바위')
        console.log('player: ' + '바위')
        console.log('비겼습니다.');
      } else {
        console.log('computer: ' + '보')
        console.log('player: ' + '바위')
        console.log('졌습니다.');
      }
      break;
    case 3:
      if(computer == 1) {
        console.log('computer: ' + '가위')
        console.log('player: ' + '보')
        console.log('졌습니다.');
      } else if(computer == 2) {
        console.log('computer: ' + '바위')
        console.log('player: ' + '보')
        console.log('이겼습니다.');
      } else {
        console.log('computer: ' + '보')
        console.log('player: ' + '보')
        console.log('비겼습니다.');
      }
      break;
  }
}

rockPaperScissors(1);