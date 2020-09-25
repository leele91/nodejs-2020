const url = require('url');

let urlSample = 'https://www.hanbit.co.kr/store/books/look.php?p_code=B6787201225';
let parsedObject = url.parse(urlSample);
console.log(parsedObject);
console.log(parsedObject.query);


console.log(url.format(parsedObject));