for(let i = 0; i < 5; i++) {
  for(let j = 5; j > i; j--) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

for(let i = 0; i < 5; i++) {
  for(let j = 0; j < i; j++) {
    process.stdout.write(' ');
  }
  for(let j = 5; j > i; j--) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

for(let i = 0; i <= 5; i++) {
  for(let j = 0; j < i; j++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

for(let i = 0; i < 5; i++) {
  for(let j = 5; j > i; j--) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

for(let i = 0; i < 5; i++) {
  for(let j = i; j < 4; j++) {
    process.stdout.write(' ');
  }
  for(let j = 0; j < i * 2 + 1; j++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}