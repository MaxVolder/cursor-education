// Задача 1
function getMaxDigit(number) {
    let maxDigit = 0;
    const numberString = number.toString();
  
    for (let i = 0; i < numberString.length; i++) {
      const digit = parseInt(numberString[i]);
  
      if (digit > maxDigit) {
        maxDigit = digit;
      }
    }
  
    return maxDigit;
  }
  console.log(getMaxDigit(155673));

//Задача 2
  function powerOfANumber(number, degree) {
    let result = 1;
    for(let i = 0; i<degree; i++) {
        result = result * number
    }
    return result;
  }
  console.log(powerOfANumber(3,3)); 

  // Задача 3
  function formatName(name) {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return formattedName;
  }
  
  //Задача 4
  function calculateNetIncome(grossIncome) {
    const tax = 0.195; 
  
    const taxAmount = grossIncome * tax; 
    const netIncome = grossIncome - taxAmount; 
  
    return netIncome;
  }
  
// Задача 5
function getRandomInteger(N, M) {
    const randomInteger = Math.floor(Math.random() * (M - N + 1)) + N;
    return randomInteger;
  }

//Задача 6
function countLetterOccurrences(word, letter) {
    const lowercasedWord = word.toLowerCase();
    const lowercasedLetter = letter.toLowerCase();
  
    let count = 0;
    for (let i = 0; i < lowercasedWord.length; i++) {
      if (lowercasedWord.charAt(i) === lowercasedLetter) {
        count++;
      }
    }
  
    return count;
  }
// Задача 7
function convertCurrency(currencyString) {
    const amount = parseFloat(currencyString);
    const lowercasedCurrencyString = currencyString.toLowerCase();

    if (lowercasedCurrencyString.includes("$")) {
      const uahAmount = amount * 37;
      return `${uahAmount} грн.`;
    } else if (lowercasedCurrencyString.includes("uah")) {
      const dollarAmount = amount / 37;
      return `${dollarAmount}$`;
    } else {
      return "Помилка!Невідома валюта";
    }
  }
  
  // Задача 8
  function getRandomPassword(length = 8) {
    let password = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  

  
