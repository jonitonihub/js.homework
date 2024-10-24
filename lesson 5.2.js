var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

const listOfNumbers = [];



// парсинг всіх цін та додавання до списку listOfNumbers
function calculateTotal(services) {
    let total = 0;

    for (let service in services) {
        let price = parseInt(services[service]); 

        if (!isNaN(price)) {
            total += price;
            listOfNumbers.push(price);
        }
    }

    return total + " грн. - За всі послуги";
    
}

console.log(calculateTotal(services));
console.log(listOfNumbers);



// Визначення мінімальної та максимальної суми з списку, який був створений попередньою функцією

let max = listOfNumbers[0];
let min = listOfNumbers[0];

for (let i = 1; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > max) {
        max = listOfNumbers[i];
    }
    if (listOfNumbers[i] < min) {
        min = listOfNumbers[i];
    }
}

console.log("Найбільше число: " + max);
console.log("Найменше число: " + min);