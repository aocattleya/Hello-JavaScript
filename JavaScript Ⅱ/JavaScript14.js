// 配列と繰り返し処理 - undefinedを避ける

const characters = [
    { name: "ao", age: 24 },
    { name: "mikan", age: 20 },
    { name: "yuta", age: 19 },
    { name: "jun" }
];

for (let i = 0; i < characters.length; i++) {
    console.log("---------------");

    const character = characters[i];

    console.log(`名前は${character.name}です`);

    if (character.age === undefined) {
        console.log("年齢は秘密です");
    } else {
        console.log(character.age + "歳です");
    }
}