// 사용자가 입력한 글을 받는 방법
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('정수 입력,로 구분해서 여러개 입력 > ');
rl.prompt();

// 3,4,8,9
rl.on('line', function(buf) {
    let input = parseInt(buf);

    let bufArray = buf.split(',')

    if (input % 3 === 0) {
        console.log(`${input} 은/는 3의 배수입니다.`);
    } else {
    console.log(`${input} 은/는 3의 배수가 아닙니다입니다.`);
    }
    rl.close();
});