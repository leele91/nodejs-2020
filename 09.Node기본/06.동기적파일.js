// 동기적으로 파일 읽기
const fs = require('fs');
const { Console } = require('console');

// binary data 읽기
let buffer = fs.readFileSync('tmp/textfile.txt');

// 출력한 결과 출력
console.log(buffer);
console.log(buffer.toString());

// text 데이터 읽기
let text = fs.readFileSync('tmp/textfile.txt', 'utf8');
console.log(text);