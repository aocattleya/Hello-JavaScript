let data1 = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3, x4, x5, x6, x7] = data1;

console.log(x0); // 56
console.log(x7); // 99

console.log("-----");

let data2 = [56, 40, 26, 82, 19, 17, 73, 99];
let [y0, y1, y2, ...other] = data2;

console.log(y0); // 56
console.log(y1); // 40
console.log(y2); // 26
console.log(other); // [82, 19, 17, 73, 99]
