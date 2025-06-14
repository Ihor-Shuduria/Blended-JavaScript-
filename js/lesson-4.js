// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// =================================================================

let numberOfMinutes = prompt("Введіть час в хвилинах");
if (!numberOfMinutes || isNaN(numberOfMinutes)) {
  alert("Введіть коректне значення");
} else {
  numberOfMinutes = Number(numberOfMinutes);
  let hours = Math.floor(numberOfMinutes / 60);
  let minutes = numberOfMinutes % 60;
  let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  alert(`${formattedTime}`);
}
