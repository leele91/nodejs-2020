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

rl.on('line', function(x) {
    let input = parseInt(x);

if  (90 <= x){
console.log('A'); 
}  else if(80<= x){
    console.log('B');
}  else if(70<= x){
    console.log('c');
}  else if(60<= x){
    console.log('d');
}  else{
    console.log('f');
} 
rl.close();
});