function cutbar(m, n, current) {
  if (current >= n) {
    return 0;
  } else if (current < m) {
    return 1 + cutbar(m, n, current * 2);
  } else {
    return 1 + cutbar(m, n, current + m);
  }
}

console.log(cutbar(3, 8, 1));