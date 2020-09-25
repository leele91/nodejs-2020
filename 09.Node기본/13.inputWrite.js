// node this.js fillename

const fs = require('fs');
const readline = require('readline');

// fiename 을 받는 방법
if (process.argv.length < 3) {       //에러방지
    console.log('사용법: node this.js filename [option]'); //[]있을수도 있고 없을수도 있어도 무방하다는뜻 
    process.exit(); 

}
let filename = process.argv[2];
//option 설정
let option; // 안에 쓰면 안에서 밖에 유효하지 않기에 밖에 써줌
if (process.argv.length === 4) {
    if (process.argv[3] === 'append')
    option = 'a';
}

// 파일이름을 입력받을려면.. 이부분이 입력하는 것에따라 바뀜
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt(' > ');

rl.prompt();
let input = '';
rl.on('line', function(buf){   //라인이 들어오는 곳에 추가
    input += buf + '\n';       // 받는 것에 따라 "line"대신 다른 태그추가
    rl.prompt();          
}).on('close', function(){        //데이터를 쳐주면됨
    if (option === 'a') {
        fs.writeFile(filename, input,{flag: 'a'}, e => {
            if (error)
            console.log(error);
        });
    }else {
        fs.writeFile(filename, input, error => {
            if (error)
            console.log(error);
        });
    }
});
