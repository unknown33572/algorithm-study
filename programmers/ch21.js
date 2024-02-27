// function solution(arr, queries) {
//   var answer = [];
//   for(let i = 0; i < queries.length; i++) {
//     for(let j = 0; j < queries[i].length; j++) {
//       let start = queries[i][0];
//       let end = queries[i][1];
//       for(let k = start; k < end; k++) {
//         arr[k] += 1;
//       }
//     }
//     console.log('---');
//   }
//   answer = arr;
//   return answer;
// }

function solution(arr, queries) {
  var answer = [];
  for(let i = 0; i < queries.length; i++) {
    // let s = queries[i][0];
    // let e = queries[i][1];
    for(let j = queries[i][0]; j <= queries[i][1]; j++) {
        arr[j] += 1;
    }
  }
  answer = arr;
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], [[2, 4]]));