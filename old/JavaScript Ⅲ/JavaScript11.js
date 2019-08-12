// アメリカドルから日本円への換算システム

const dollarYenRate = 110;

const converToYen = (priceDollar) => {
    return priceDollar * dollarYenRate;
}

const information = (name, price) => {
    console.log(`アメリカドルで${name}は${price}ドルです`);

    const priceYen = converToYen(price);

    console.log(`日本円で${name}は${priceYen}円です`);
    console.log("------------------");
};
information("香水", 48);
information("お菓子", 6);