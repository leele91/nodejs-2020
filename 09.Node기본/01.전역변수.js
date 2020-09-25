const path = require('path');
// 파일 이름을 정리할수 잇다.
console.log(__dirname);
console.log(__filename);

let filename = path.join(__dirname, 'tmp', 'textfile.txt');
let dirtyname = path.join(__dirname, 'tmp', '..', 'tmp', 'textfile.txt');
console.log(filename);
console.log(dirtyname);

