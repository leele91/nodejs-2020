// process 객체의 속성과 메소드를 사용
console.log('-process.arch:', process.arch);
console.log('-process.platform:', process.platform);
console.log('-process.connected:', process.connected);
console.log('-process.execArgv:', process.execArgv);
console.log('-process.mainModule:', process.mainModule);
console.log('-process.release:', process.release);
console.log('-process.memoryUsage():', process.memoryUsage());
console.log('-process.uptime():', process.uptime());
console.log('-process.argv:', process.argv);

//강제종료
process.exit();

// 위에 강조 된 이후 부분은 실행하지 않음
console.log('테스트');
console.log('테스트');
console.log('테스트');