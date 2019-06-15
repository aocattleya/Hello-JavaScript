// 複雑なオブジェクトの呼び出し

const cafe = {
    name: "青カトレア",
    businessHours: {
        opening: "10:00(AM)",
        closing: "8:00(PM)",
    },
};

console.log(`店名：${cafe.name}`);

console.log(`営業時間：${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
