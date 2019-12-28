let book = { title: "Javaポケットリファレンス", publish: "技術評論社", price: "2680"　};
let { price, title, memo = "なし" } = book;

console.log(title); // Javaポケットリファレンス
console.log(price); // 2680
console.log(memo); // なし
