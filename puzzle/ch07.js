function binaryToString(binary) {
  return parseInt(binary, 2).toString();
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

let fromLeft = parseInt((19641010).toString(2).substring(4, 12), 2);
let toLeft = parseInt((20200724).toString(2).substring(4, 12), 2);

for(let i = fromLeft; i <= toLeft; i++) {
  let binary = '0001' + i.toString(2) + '000000000000';
  let date = binaryToString(binary);
  if(isValidDate(new Date(date))) {
    console.log(date);
  }
}