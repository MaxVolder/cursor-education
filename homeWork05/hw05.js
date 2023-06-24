// Задача 01

function getRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNum);
    }
    return randomArray;
  }
  console.log(`Задача 1, яка повертає масив випадкових чисел(15, 1, 100): ${getRandomArray(15, 1, 100)}`);
  // Задача 02

  function getModa(...numbers) {
    let occurrences = {};
    let maxCount = 0;
    let mode = null;
  
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
  
      if (Number.isInteger(num)) {
        occurrences[num] = (occurrences[num] || 0) + 1;
  
        if (occurrences[num] > maxCount) {
          maxCount = occurrences[num];
          mode = num;
        }
      }
    }
  
    return mode;
  }
console.log(`Задача 2, яка вираховує моду(2,6,9,44,67): ${getModa(2,6,9,44,67)} `);
  // Задача 03 

  function getAverage(...numbers) {
    let validNumbers = numbers.filter(num => !isNaN(num));
    let sum = validNumbers.reduce((total, num) => total + num, 0);
  
    if (validNumbers.length === 0) {
      return 0;
    }
  
    let average = (sum / validNumbers.length).toFixed(2);
    return average;
  }
  console.log(`Задача 3, яка рахує середнє арифметичне(2,55,11,78,2,55,77,57,87,23,2,56,3,2): ${getAverage(2,55,11,78,2,55,77,57,87,23,2,56,3,2)}`);
  // Задача 04

  function getMedian(...numbers) {
    const filteredNumbers = numbers.filter(num => Number.isInteger(num));
    const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
    const length = sortedNumbers.length;
    
    return length % 2 === 0
      ? (sortedNumbers[length / 2 - 1] + sortedNumbers[length / 2]) / 2
      : sortedNumbers[Math.floor(length / 2)];
  }
console.log(`Задача 4, яка рахує мередіану(2,55,11,78,2,55,77,57,87,23,2,56,3,2): ${getMedian(2,55,11,78,2,55,77,57,87,23,2,56,3,2)}`);
  
  // Задача 05

  function filterEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 !== 0);
  }
  console.log(`Задача 5 фільрує парні числа(1,2,3,4,5,6): ${filterEvenNumbers(1,2,3,4,5,6)}`);

  // Задача 06
  
  function countPositiveNumbers(...numbers) {
    return numbers.filter(num => num > 0).length;
  }
  console.log(`Задача 6, яка вираховує кілкість чисел більших за нуль (-4,6,-45,767,4,6): ${countPositiveNumbers(-4,6,-45,767,4,6)}`);