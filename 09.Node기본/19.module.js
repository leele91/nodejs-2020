module.exports = { // exports =>속성값
    randInt: function (from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    },
    // function 이름이 객체가 됨
    area: function (radius) {
        return Math.PI * radius * radius;

    }

}