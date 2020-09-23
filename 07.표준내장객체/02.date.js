// 현재 시간을 기반으로 
let date =new Date();
console.log(`현재 시간은 ${date} 입니다.`);

// 유닉스타임
let unixDate = new Date(1600000000000);
console.log(`unixDat 시간은  ${unixDate} 입니다.`); 

// 문자열  기반으로
/* let stringDate = new Date('Sun Sep 13 2020 21:26:40'); */
let stringDate = new Date('2020-09-23 14:50');
console.log(`문자열로 만든 시간은  ${stringDate} 입니다.`);

// 시간 요소 
let elementDate = new Date(2020, 9-1, 23, 14, 50);
console.log(`요소로 만든 시간은  ${elementDate} 입니다.`);