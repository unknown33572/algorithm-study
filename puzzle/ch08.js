let N = 12;
function move(log) {
  if(log.length === N + 1) {
    return 1;
  }

  let count = 0;
  let diffs = [[0,1], [0,-1], [1,0], [-1,0]];

  for(let diff of diffs) {
    let nextPos = [log[log.length - 1][0] + diff[0], log[log.length - 1][1] + diff[1]];
    if(!log.some(p => p[0] === nextPos[0] && p[1] === nextPos[1])) {
      count += move(log.concat([nextPos]));
      nextPos = [log[log.length - 1][0] - diff[0], log[log.length - 1][1] - diff[1]];
      let check = false;
      for(let p of log) {
        if(nextPos[0] === p[0] && nextPos[1] === p[1]) {
          check = true;
        }
      }
      if(!check) {
        count += move(log.concat([nextPos]));
      }
    }
  }
  return count;
}

console.log(move([[0,0]]));