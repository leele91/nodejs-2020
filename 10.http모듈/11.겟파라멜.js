const http = require('http');
const url = require('url');

 http.createServer((req, res) => {                                //let server 생략가능
    let query = url.parse(req.url, true).query;    
    console.log(query.name. query.region);

    // GET 파라메터 출력, localhost :300?name=kim&region=seoul
    res.end(`<h1>${JSON.stringify(query)}</h1>`);
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
}); 