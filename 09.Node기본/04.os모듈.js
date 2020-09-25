const os = require('os');  //os를 사용하려면 꼭 해당 문장을 써야함 (모듈을 추출)

// 모듈을 사용
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());