const prompt = require('prompt-sync')(); // Підключаємо модуль prompt-sync

// Оголошення функції
function pow(x, y) {
    if (y === 0) {
        return 1;
    }
    return x * pow(x, y - 1);
}
// ввід даних
const base = (prompt("Введіть число, яке хочете звести до степеня: "));
const exponent = (prompt("Введіть степінь: "));

// Виклик функції з введеними значеннями
const result = pow(base, exponent);
console.log(`Результат: ${result}`);
