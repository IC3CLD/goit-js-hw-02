let input = ` `;
const numbers = [];
let total = 0;

// input = prompt("Введите число");

// for (let index = 0; input !== null; index += 1) {
//     if (isNaN(input)) {
//       alert("Было введено не число, попробуйте еще раз");
//       input = prompt();
//     } else {
//       numbers.push(input);
//       input = prompt();
//     }
//   }

// console.log();

//   if (numbers.length !== 0) {
//     for (const add of numbers) {
//       total += +add;
//     }
//   }
//   alert(`Общая сумма чисел равна ${total}`);


while (input) {
    input = prompt('Введите число');
    console.log(input);
    if (input == null) {
      alert('Отменено пользователем');
    } else {
      input = Number(input);
      if (!isNaN(input));
      numbers.push(input);
      total += input;
      }
  }

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(numbers);
  console.log(`Общая сумма чисел равна ${total}`);
