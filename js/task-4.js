// Напиши функцию formatString(string) которая
// принимает строку и форматирует ее если необходимо.


const formatString = function (string) {
    let array = Array.from(string);
    if (array.length <= 40) {
      return string;
    } else {
      array.length = 40;
    //   array.push("...");
    array.splice(40,0,`...`);
      return array.join("");
    }
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  // вернется оригинальная строка
  
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
  // вернется форматированная строка
  
  console.log(formatString("Curabitur ligula sapien."));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );
  // вернется форматированная строка