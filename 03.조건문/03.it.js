// input을 command argument로 받는 방법
//process.argv 배열에 argument가 오는 방법


/* for (let arg of Process.argv) {
    console.leg(arg)
    input = parseInt(arg);
    if (isNaN(input))
    continue;

    if (input % 2==0) {
        console.log(`${input} 은 /짝수입니다.`);
    } else {
    console.log(`${input} 은 /홀수입니다.`);
    }
} */

for (let i=2; i < Process.argv.length; i++) {
    input = parseInt(Process.argv[i]);

    if (input % 2==0) {
        console.log(`${input} 은 /짝수입니다.`);
    } else {
    console.log(`${input} 은 /홀수입니다.`);
    }
}