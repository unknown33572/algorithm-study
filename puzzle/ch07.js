function binaryToString(binary) {
  return parseInt(binary, 2).toString();
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

let fromLeft = parseInt((19641010).toString(2).substring(4, 12), 2);
let toLeft = parseInt((20200724).toString(2).substring(4, 12), 2);

for(let i = )