function solution(arr, intervals) {
  let answer = [];
  let box = [];
  for(let i = 0; i < intervals.length; i++) {
    let partial = arr.slice(intervals[i][0] , intervals[i][1] + 1);
    box.push(partial);
  }
  answer = box[0].concat(box[1]);
  return answer;
}

function solution(arr, intervals) {
  var answer = [];

  intervals.map((a)=>{
      for(let i = a[0]; i<=a[1]; i++){
          answer.push(arr[i])
      }
  })

  return answer;
}

function solution(arr, intervals) {
  const [[a,b],[c,d]] = intervals;

  return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}