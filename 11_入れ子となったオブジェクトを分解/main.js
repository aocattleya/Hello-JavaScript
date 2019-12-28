let book = {
  title: "Javaポケットリファレンス",
  publish: "技術評論社",
  price: "2680",
  other: { keywd: "Java SE 8", logp: "logo.jpg" }
};
let {
  title,
  other,
  other: { keywd }
} = book;

console.log(title); // Javaポケットリファレンス
console.log(other); // { keywd: "Java SE 8", logp: "logo.jpg" }
console.log(keywd); // Java SE 8
