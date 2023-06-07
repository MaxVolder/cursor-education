const priceApple = 15.678;
const priceBanana = 123.965;
const priceOrange = 90.2345;
let maxPrice = Math.max(priceApple, priceBanana, priceOrange);
console.log('maxPrice:', maxPrice)
let minPrice = Math.min(priceApple, priceApple, priceOrange)
console.log('minPrice:',minPrice);
const totalPrice = priceApple + priceBanana + priceOrange;
console.log('totalPrice:', totalPrice);
let roundedPriceAll = Math.floor(priceApple)+Math.floor(priceBanana)+Math.floor(priceOrange)
console.log('roundedPriceAll:', roundedPriceAll);
let roundedTo100PriceAll = Math.round(totalPrice/100)*100;
console.log('roundedTo100PriceAll:', roundedTo100PriceAll);
let isEven = Math.floor(totalPrice)%2 === 0;
console.log('isEven:', Math.floor(totalPrice)%2 === 0);
let sum = 500 - totalPrice;
console.log('Сума решти:', 500 - totalPrice);
const averagePrice = totalPrice/3
console.log('rondedAveragePrice:', averagePrice.toFixed(2));
const discount = Math.round(Math.random() * 100);
const discountedPrice = (totalPrice - (totalPrice * (discount/100))).toFixed(2);
console.log('discountedPrice:', discountedPrice);
let profit = (totalPrice/2) - discountedPrice;
console.log('profit:',profit);
const output = `
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${totalPrice}
Сума округлених цін товарів: ${roundedPriceAll}
Сума товарів округлена до сотень: ${roundedTo100PriceAll}
Сума всіх товарів (округлена) є парним числом: ${isEven}
Сума решти при оплаті на 500 грн: ${sum}
Середнє значення цін: ${averagePrice.toFixed(2)}
Знижка: ${discount}%
Сума до оплати зі знижкою: ${discountedPrice}
Чистий прибуток: ${profit.toFixed(2)}
`;

console.log(output);