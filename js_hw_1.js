// Приклад_1
let result_1 = "number" + 3 + 3;
console.log(result_1);  //стрінга + число дає в резудьтаті стрінгу number33


// Приклад_2
let result_2 = null + 3;
console.log(result_2); // нуль + 3 оттримуємо 3


// Приклад_3
let result_3 = 5 && "qwerty";
console.log(result_3); // Обидва операнди трушні, && повертає останнє true "qwerty"

let result_4 = +'40' + +'2' + "hillel";
console.log(result_4); // в результаті звичайна стрінга '42hillel'

let result_5 = '10' - 5 === 6;
console.log(result_5); // стрінга 10 конвертується в число 10 -5 не дорівнює 6 тому буде фолс

let result_6 = true + false;
console.log(result_6); // true це 1, а false це 0. Сума — 1.

let result_7 = '4px' - 3;
console.log(result_7); // неможливо відняти число від рядка, що має текст NaN

let result_8 = '4' - 3;
console.log(result_8); //  все понятно ..1

let result_9 = '6' + 3 ** 0;
console.log(result_9); // 3 в степені 0 дорівнює 1 далі обєднання в рядок 61

let result_10 = 12 / '6';
console.log(result_10); // ділення перетворює стрінгу 6 в число 12\6=2

let result_11 = '10' + (5 === 6);
console.log(result_11); //  (5 === 6 повертає false, а 10 це стрінга результат 10false)

let result_12 = null == '';
console.log(result_12); //  null і порожній рядок не рівні не рівні false

let result_13 = 3 ** (9 / 3);
console.log(result_13); // 3 в степені 3 =27

let result_14 = !!'false' == !!'true';
console.log(result_14); // не пуста стрінга буде тру !!- дасть тру і в другій частині так само в кінці тру = тру

let result_15 = 0 || '0' && 1;
console.log(result_15); //  друга частина дає 1 бо спочатку анд а при ор 0 | 1 дає 1

let result_16 = (+null == false) < 1;
console.log(result_16); // зліва результат 0=false це true "1" зпрва 1  1<1 - ні, тому фолс

let result_17 = false && true || true;
console.log(result_17); // false && true дає false, а false || true дає true

let result_18 = false && (false || true);
console.log(result_18); // спочатку в душках (false || true дає true, але false && true дає false

let result_19 = (+null == false) < 1 ** 5;
console.log(result_19); (+null == false) //  + пиеретворив null в число 0 = false це тру, 1<1 ні тому фолс
