N = 12

def move(log):
  if len(log) == N + 1:
    return 1
  
  cnt = 0
  for diff in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
    next_pos = (log[-1][0] + diff[0], log[-1][1] + diff[1])
    if next_pos not in log:
      cnt += move(log + [next_pos])
      next_pos = (log[-1][0] - diff[0], log[-1][1] - diff[1])
      check = False
      for p in log:
        if next_pos[0] == p[0] and next_pos[1] == p[1]:
          check = True
      if check == False:
        cnt += move(log + [next_pos])
  return cnt

print(move([(0, 0)]))