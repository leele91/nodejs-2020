const http = require('http');
const fs = require('fs');

// 인덱스 할땐 이 아래의 방법이 좋다. 
let server =http.createServer((req,res) => {
    fs.readFile('media/EmbraceableYOU.mp3', (error, audio) =>  { //순서 중요
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(audio);
    })
});

server.listen(4000);