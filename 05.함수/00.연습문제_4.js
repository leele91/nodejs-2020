// 1 에서 1000까지 각 숫자의 갯수를 구하시오

/* let counts =[0,0,0,0,0,0,0,0,0,0];

// 한자리 수 
for (let i=1; i<=9; i++) {
    counts[i]++;
}
// 두자리 수
for (let i = 10; i<=99; i++) {
    counts[parseInt(i/10)]++;   // 십의 자리수
    counts[i % 10]++;          // 일의 자리수
}
// 세자리 수
for (let i =100; i<=999; i++) {
    counts[parseInt(i/100)]++; // 백의 자리수
    counts[parseInt((i%10)/10)]++; // 십의 자리수
    counts[i % 10]++;   // 일의 자리수
    
}
// 네자리 수
for (let i=1000; i<=1000; i++) {
    counts[parseInt(i/1000)]++;        // 천의 자리수
    counts[parseInt((i%1000)/100)]++;    // 백의 자리수
    counts[parseInt((i%100)/10)]++;   // 십의 자리수
    counts[i % 10]++;  //일의 자리수
}
console.log(counts); */

// 또 다른 문제 풀이 방법 
let counts =[0,0,0,0,0,0,0,0,0,0];

for (let i=1; i<=1000; i++) {
    let numString  = String(i);
    for (let digit of numString) {
        counts[parseInt(digit)]++;
    }
}
console.log(counts);