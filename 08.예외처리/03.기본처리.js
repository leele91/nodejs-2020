function callThreeTimes(callback) {
    if (callback) {
        for(let i=0; i<3; i++) {
            callback();

        }
    }else {
        console.log('callback 함수를 정의 하세요');
    }
}

callThreeTimes(function() { // ()안에 익명함수를 넣어야함
    console.log('호출')
});
callThreeTimes();