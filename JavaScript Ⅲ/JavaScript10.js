// アロー関数 - if文

const check = (number) => {
    return number % 3 === 0;
};

if (check(123)) {
    console.log("3の倍数です");
} else {
    console.log("3の倍数ではありません");
}