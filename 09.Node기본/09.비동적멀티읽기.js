// 여러개 파일 비동기적으로 읽기 -> 그때그때 마다 순서가 다르게 출력

const fs = require('fs');
// 순서보장이 안됨
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
    console.log(bufC);
});

// 순서보장 방법-> 콜백 지옥
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
        fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});