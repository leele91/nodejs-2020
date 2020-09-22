function callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}
// callback위치에 익명 함수를 추가
callFiveTimes(function() {
    console.log('Function call');
});