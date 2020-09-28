const http = require('http');
const fs = require('fs');

// 인덱스 할땐 이 아래의 방법이 좋다. 
let server =http.createServer((req,res) => {
    fs.readFile('media/Elvis.png', (error, image) =>  { //순서 중요
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(image);
    })
});

server.listen(3000);