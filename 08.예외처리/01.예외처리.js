try {
    error.error.error();
} catch (e) { //e가 에러라는 표시
    console.log(e.name);
    console.log(e.message);
}

console.log('프로그램 정상 종료');