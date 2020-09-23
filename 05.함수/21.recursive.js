// 재귀적 호출 (Recursive call) - 자기가 자기를 호출

function facto(n) {
    if (n === 0)
        return 1;
    return n * facto(n-1);
}
console.log(facto(5));