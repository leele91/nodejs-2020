//1. 양의 정수 N을 입력으로 받아 1부터 N까지 제곱의 합과
// 합의 제곱을 구하시오

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('양의 정수> ');
rl.prompt();

//
rl.on('line', function(buf) {
    //입력을 받아서 처리하는 로직
    let number = parseInt(buf);
    
    let sumOfSquare = 0; // 제곱의 합
    for (let i=1; i < number; i++){
        sumOfSquare += i * i;
    }
    console.log(`1에서 ${number}까지의 제곱의 합: ${sumOfSquare}`);

    let sum = 0;  // 합의 제곱
    for (let i=1; i<= number; i++) {
        sum += i;
    }
    let sum1 = sum * sum;    //합의 제곱
    console.log(`1에서 ${number}까지의 합의 제곱: ${sum1}`);

    // 끝날때 반드시 처리해야함
    rl.close();
});