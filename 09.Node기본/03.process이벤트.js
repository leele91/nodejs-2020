// exit 이벤트를 연결 (3)
process.on('exit', function(code) {
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:',code);
});
// uncaughtException 이벤트를 연결 (1)
process.on('uncaughtException', error=> {
    console.log('예외가 발생하였습니다.');
    console.log('uncaughtException 매개변수\n', error);  //에러 발생확인
});

//임의의 이벤트를 연결
process.on('message', ()=>{
    console.log('message event.');
})

//예외를 강제로 발생 (2)
error.error.error();