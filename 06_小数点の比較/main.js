console.log(0.1 + 0.2 === 0.3);  // false
console.log(0.2 + 0.3 === 0.5);  // true
console.log(0.2 * 3 === 0.6);  // false
console.log(0.2999999999999999889 === 0.3);  // true

// 正しい比較
console.log(((0.2 * 10) * 3) / 10);  // 0.6
console.log((0.2 * 10) * 3 === 0.6 * 10);  // true
