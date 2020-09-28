const http = require('http');

let server = http.createServer(function(request, response) {
    
    response.writeHead(302,  //R
        {'Location': 'http://www.hanbit.co.kr'});
        response.end();
}); 

server.listen(3000, ()=>{
    console.log('Server Runing at http://127.0.0.1:3000');
});

