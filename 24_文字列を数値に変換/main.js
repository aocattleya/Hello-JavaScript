var n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));
// NaN
// 123
// 123

console.log('---');

var d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));
// 1577711575160
// NaN
// NaN

console.log('---');

const h = '0x10';
console.log(Number(h));
console.log(Number.parseFloat(h));
console.log(Number.parseInt(h));
// 16
// 0
// 16

console.log('---');

const b = '0b11';
console.log(Number(b));
console.log(Number.parseFloat(b));
console.log(Number.parseInt(b));
// 3
// 0
// 0

console.log('---');

const e = '1.01e+2';
console.log(Number(e));
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e));
// 101
// 101
// 1
