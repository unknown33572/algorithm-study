function countCombination(amount, coins, values, index) {
  if(index >= coins.length || coins === 0 || amount === 0) {
    return amount === 0 && coins >= 0 ? 1 : 0;
  }

  let count = 0;
  for(let i = 0; i <= coins && amount >= values[index] * i; i++) {
    count += countCombination(amount - values[index] * i, coins - i, values, index + 1);
  }
  return count;
}

const values = [500, 100, 50, 10];
console.log(countCombination(1000, 15, values, 0));