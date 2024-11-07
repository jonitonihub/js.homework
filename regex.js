let list1 = "Wonderful, Joyful, Happiness, Time, Task, Apple";


let reg = /\b[^Aa]{6,}\b/;

let result1 = list1.search(reg);
let result2 = list1.match(reg);



console.log(result1);
console.log(result2);