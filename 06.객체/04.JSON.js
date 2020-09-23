let persons =[
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 17}
];
// 외부로 나갈때 stringify(변수)
let externalForm = JSON.stringify(persons);
console.log(externalForm);

// 외부에서 익스트로폼을 받아서 다시쓸경우 parse(변수)
let p = JSON.parse(externalForm);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}

