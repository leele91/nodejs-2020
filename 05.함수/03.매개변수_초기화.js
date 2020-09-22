// 함수 선언
function print(name, count) {
    /* if (!count)
        count = 0;
    count = !count ? 0 : count;  */// 삼항연산자
    //count = count ? count : 0;
    count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
// 함수를 호출
print("사과", 10);
print("사과")