const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = [];
rl.on('line', function (line) {
    input = [line];
    rl.close();
}).on('close',function(){
    str = input[0].split(' ').join('');
    output = str
    console.log(output);
});
