function callThreeTimes(callback) {
    for(let i=0; i<3; i++) {
        callback();
    }
}

callThreeTimes(function() { //()안에 익명함수를 넣어야함
    console.log('호출')
});
/* callThreeTimes(); */