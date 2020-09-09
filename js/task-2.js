const calculateEngravingPrice = function(message, pricePerWord) {
  let wordCount = message.split(' ');
  // console.log(message = message.split(' '));
  // console.log(wordCount.length);
  // console.log(pricePerWord);
  // let price = wordCount.length * pricePerWord;
  // console.log(price);
  return wordCount.length * pricePerWord
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120