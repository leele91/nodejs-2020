const http = require('http');
const view = require('./view/01.first');
// 서버를 만드는것
let server = http.createServer(function(request, response) {
    // console.log(request);
    let html = view.first();
    response.writeHead(200,  //status code, OK
        {'Content-Type': 'text/html'}); // Content-Type': 'text/html'이 디폴트라 생략가능
    response.end(html);
}); 

server.listen(3000); // 코
