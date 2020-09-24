let size = -10;

try {
    let array = Array(size);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log('양의 정수를 입력하세요.');
}