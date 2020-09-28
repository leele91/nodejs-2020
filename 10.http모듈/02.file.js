const http = require('http');
const fs = require('fs');
const { ESRCH } = require('constants');
// 인덱스 할땐 이 아래의 방법이 좋다. 
let server =http.createServer((req,res) => {
    fs.readFile('view/02.any.html', 'utf8', (console, html) =>  { //순서 중요
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    })
});

server.listen(3000);