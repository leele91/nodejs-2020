const http = require('http');
//const view = require('./view/01.first');

// 서버를 만드는것
let server = http.createServer(function(request, response) {
    // console.log(request.headers.cookie);
    let cookie = request.headers.cookie;
    response.writeHead(200, {                                  //status code, OK
        'Content-Type': 'text/html',
      'Set-cookie':['breakfast = toast','dinner= chicken']
    });                                   // Content-Type': 'text/html'이 디폴트라 생략가능
    response.end(`<h1>${cookie}</h1>`);
}); 

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
}); // 코
