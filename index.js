const testAddon = require('./build/Release/testaddon.node');
console.log('addon',testAddon);
console.log('hello ', testAddon.hello());
console.log('add ', testAddon.add(5, 10));

const prevInstance = new testAddon.ClassExample(4.3);
console.log('Initial value : ', prevInstance.getValue());
console.log('After adding 3.3 : ', prevInstance.add(3.3));

const newFromExisting = new testAddon.ClassExample(prevInstance);

console.log('Testing class initial value for derived instance');
console.log(newFromExisting.getValue());

module.exports = testAddon;
