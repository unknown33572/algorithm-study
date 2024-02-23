function solution(n, slicer, num_list) {
  var answer = [];
  switch(n) {
    case 1:
      for(var i = 0; i <= slicer[1]; i++) {
        answer.push(num_list[i]);
      }
      break;
    case 2:
      for(var i = slicer[0]; i < num_list.length; i++) {
        answer.push(num_list[i]);
      }
      break;
    case 3:
      for(var i = slicer[0]; i <= slicer[1]; i++) {
        answer.push(num_list[i]);
      }
      break;
    case 4:
      for(var i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
        answer.push(num_list[i]);
      }
      break;
    default:
      return;
  }

  return answer;
}