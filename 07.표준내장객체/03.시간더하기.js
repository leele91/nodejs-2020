let date = new Date();

console.log(date.toDateString()); // 오늘 날자
// 현재 날짜에서 100일을 더한 날짜
date.setDate(date.getDate() + 100) ;
console.log(date.toDateString());
