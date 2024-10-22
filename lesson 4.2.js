const getRandomInteger = (min, max) => { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// функція для генерації числа


function generateList(count, min, max) {
    const listOfNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = getRandomInteger(min, max);
        listOfNumbers.push(randomNumber);
    }
    return listOfNumbers;
}

const numbersList = generateList(100, 100, 1000);

// функція яка ненерує список, на віхд паремтри кількість і інтервал


function checkEvenOdd(listOfNumbers) {
    const evenNumbers = [];
    const oddNumbers = [];
    for (let number of listOfNumbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }

// функція для визначення парний непарний та створення співдношення, яке здійснюється всередені.


    const totalNumbers = evenNumbers.length + oddNumbers.length;
    const evenPercentage = totalNumbers > 0 ? (evenNumbers.length / totalNumbers) * 100 : 0;
    const oddPercentage = totalNumbers > 0 ? (oddNumbers.length / totalNumbers) * 100 : 0;
    
    return {
        even: evenNumbers,
        odd: oddNumbers,
        evenPercentage,
        oddPercentage,
    };
}

const result = checkEvenOdd(numbersList);

console.log("Список випадкових чисел:", numbersList);
console.log("Парні числа:", result.even);
console.log("Непарні числа:", result.odd);
console.log("Відсоток парних чисел:", result.evenPercentage.toFixed(2) + "%");
console.log("Відсоток непарних чисел:", result.oddPercentage.toFixed(2) + "%");