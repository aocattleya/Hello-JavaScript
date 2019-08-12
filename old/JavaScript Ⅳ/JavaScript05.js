// コンストラクタの引数

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const animal = new Animal("モカ", 8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);