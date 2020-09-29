const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
const template = require('./view/template');

http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    console.log(pathname, query.id) // 확인용
    switch (pathname) {
        case '/': // 초기(홈)화면_초기화면에서는 수정 삭제버튼 작동이 필요없기에 tem.js에서 뺌
            if (query.id === undefined) {
                fs.readdir('data', function (error, filelist) {
                    let list = template.listGen(filelist);
                    let content = template.HOME_CONTENTS;
                    let control = template.buttonGen();
                    let html = view.index('Web 기술', list, content, control); // 웹화면의 탭 부분
                    res.end(html);
                });
            } else { // id(목록)_부분
                fs.readdir('data', function(error, filelist) {
                    let list = template.listGen(filelist);
                    let title = query.id;
                    let control = template.buttonGen(title);
                    let filename = 'data/' + title + '.txt';
                    fs.readFile(filename, 'utf8', (error, buffer) => {
                        let html = view.index(title, list, buffer, control);
                        res.end(html);
                    });
                });
            }
            break;
        default:
            res.writeHead(404);
            res.end();
    }
}).listen(3000, () => {
    console.log('Server Running at http://localhost:3000')
});