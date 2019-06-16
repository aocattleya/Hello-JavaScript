// メソッド内で値を使う

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんにちは");
    }
    info() {
        console.log(`名前は${this.name}です`);
        console.log(`年齢は${this.age}歳です`);
    }
}
const animal = new Animal("レオ", 3);

animal.greet();
animal.info();