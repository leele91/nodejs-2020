const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('년도 입력');
rl.prompt();

rl.on('line', function (x) {
    let year = parseInt(x);
// 입력을 받아서 처리 로직

    if (year % 400 === 0); {
        console.log('윤년')
    } else if (year % 100 === 0); {
        console.log('윤년이 아니다.')
    } else if (year % 4 === 0); {
        console.log('윤년')
    } else if (year % 1 === 0); {
        console.log('윤년이 아니다.')
    }
    //끝
    rl.close();
});
