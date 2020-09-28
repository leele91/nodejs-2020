function factorialTest(x) {
    console.log("현재 x : " + x);
    var y = 1;
    if(x==y) return y;
    else return x*factorialTest(x-1); // 재귀 호출
}

3*factorialTest(2);
3*2*factorialTest(1);
3*2*1



var result = factorialTest(3);
console.log("결과 : " + result); // 6