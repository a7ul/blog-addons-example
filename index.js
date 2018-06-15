const testAddon = require('./build/Release/testaddon.node');
console.log('addon',testAddon);
console.log('hello ', testAddon.hello());
console.log('add ', testAddon.add(5, 10));


const classInstance = new testAddon.ClassExample(4.3);
console.log('Testing class initial value : ',classInstance.getValue());
console.log('After adding 3.3 : ',classInstance.add(3.3));
module.exports = testAddon;
