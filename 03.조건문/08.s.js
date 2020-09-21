let date = new Date();
let hour = date.getHours();

/* if(hour<11) {
    console.log('아침');
} else {
    if (hour < 15) {
        console.log('점심');
    } else {
        console.log('저녁');
    }
} */
/* 
if(hour<11) {
    console.log('아침');
}    else if(hour<15){
    console.log('점심');
}    else {
        console.log('저녁');
}
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('정수 입력> ');
rl.prompt();

rl.on('line', function (x) {
    let score = parseInt(x);
    let grade;
    switch (parseInt(score / 10)) {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 7:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
rl.close();
});