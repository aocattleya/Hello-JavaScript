// メソッド

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんにちは");
    }
}
const animal = new Animal("レオ", 3);

console.log(`名前：${animal.name}`);
console.log(`年齢：${animal.age}`);

animal.greet();