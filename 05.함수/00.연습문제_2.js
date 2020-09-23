// 연습문제 2 a + b + c = 1000 인 피타고라스 수를 구하시오

let a, b, c;
let outerBreak = false;
for (a=1; a<332; a++) {
    for (b=a+1; b<=499; b++) {
      c = 1000 - a - b;
      if (c > (a + b))
        continue;
      if (c*c === (a*a + b*b)) {
        console.log(a,b,c);
        console.log(a*a, b*b, c*c);
        outerBreak = true;
        break;
      }
    }
    if (outerBreak)
      break;
}