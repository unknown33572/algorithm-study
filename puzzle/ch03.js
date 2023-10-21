const N = 100;
const cards = Array(N).fill(false);

for (let i = 2; i <= N; i++) {
    let j = i - 1;
    while (j < cards.length) {
        cards[j] = !cards[j];
        j += i;
    }
}

for (let i = 0; i < N; i++) {
    if (!cards[i]) {
        console.log(i + 1);
    }
}
