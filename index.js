const testAddon = require('./build/Release/testaddon.node');
console.log('addon',testAddon);
console.log(testAddon.hello());
module.exports = testAddon;
