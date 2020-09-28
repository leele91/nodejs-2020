const myModule = require('./18.exports');

for(let i=0; i<5; i++){
    console.log(myModule.area(myModule.randInt(1, 5)));
}