// ㅣ시간을 측정합니다.
console.time('alpha');

/* var output = 1;
for (var i = 1; i<=10; i++) {
    output += i; */
}
let sum =0;
for(let i=1; i<1e6; i++){
    sum +=i;
}
console.log('Result:', sum);

//시간을 측정을 종료
console.timeEnd('alpha');