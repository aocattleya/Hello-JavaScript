// 配列と繰り返し処理

const characters = [
    { name: "aocattleya", age: 24 },
    { name: "hanako", age: 20 },
    { name: "riko", age: 18 },
];

for (let i = 0; i < characters.length; i++) {
    console.log("----------------");

    const character = characters[i];
    
    console.log("名前は" + character.name + "です");
    console.log(character.age + "歳です");
}