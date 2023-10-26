from datetime import datetime, timedelta

from_left = int(bin(19641010).replace('0b', '')[4:4 + 8], 2)
to_left = int(bin(20200724).replace('0b', '')[4:4 + 8], 2)

for i in range(from_left, to_left + 1):
  l = "{0:08b}".format(i)
  r = l[::-1]
  for m in range(0, 1 + 1):
    value = "1001{}{}{}1001".format(l, m, r)
    try:
      date = datetime.strptime(str(int(value, 2)), '%Y%m%d')
      print(date.strftime('%Y%m%d'))
    except:
      pass