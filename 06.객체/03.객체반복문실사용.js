// 객체와 반복문

let persons =[
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 17}
]
for (let person of persons) {
    console.log(person.name, person.gender, person.age);
}
//persons의 값을 알고 싶을때
console.log(persons[0]);
console.log(persons[0].name);