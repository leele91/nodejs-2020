// 객체와 반복문

let person ={
    name: '홍길동', gender: '남자', age: 29
}
// for of 는 errlr!(of 는 쓸수 없다.)
/* for (let item of person) {
    console.log(item);
} */

for (let key in person) {
    console.log(key, person[key]);
}