def is_loop(n):
  check = n * 3 + 1
  while check != 1:
    if check % 2 == 0:
      check //= 2
    else:
      check = check * 3 + 1
    if check == n:
      return True
  return False

cnt = 0;
for i in range(2, 1000 + 1, 2):
  if is_loop(i):
    cnt += 1

print(cnt)