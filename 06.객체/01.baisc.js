// 배열(Array)

let arryPersonInfo = ['홍길동', '남자', 29];
console.log(arryPersonInfo[0], arryPersonInfo[1], arryPersonInfo[2]);

// 객체 (object) - key, value 쌍으로 구성
let personInfo = {
    'name' : '홍길동',
    'gender' : '남자',
    'age' : 29
}
let g = 'gender'
console.log(personInfo['name'], personInfo[g], personInfo['a'+'ge']);

let person ={
    name: '홍길동', gender: '남자', age: 29
}
console.log(person.name,person.gender, person.age);

console.log(process.env.JAVA_HOME); // JAVA_HOME는 키(keg) 출력한게 벨류