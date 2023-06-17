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
  console.log(`Функція No1, яка виводить найбільшу цифру в числі 1236: ${getMaxDigit(1236)}`)

//Задача 2
  function powerOfANumber(number, degree) {
    let result = 1;
    for(let i = 0; i<degree; i++) {
        result = result * number
    }
    return result;
  }
  console.log(`Функція No2, яка виводить 3 в 3-ій ступені: ${powerOfANumber(3,3)}`); 

  // Задача 3
  function formatName(name) {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return formattedName;
  }
  let name = "вОлоДимиР";
  const formattedName = formatName(name);
  console.log(`Функція No3, яка виводить форматоване імя вОлоДимиР: ${formatName(name)}`);
  
  //Задача 4
  function calculateNetIncome(grossIncome) {
    const tax = 0.195; 
  
    const taxAmount = grossIncome * tax; 
    const netIncome = grossIncome - taxAmount; 
  
    return netIncome;
  }
  console.log(`Функція No4, яка виводить заробітню плату з суми 1000, після сплати податку в розмірі 19,5%: ${calculateNetIncome(1000)}`)
// Задача 5
function getRandomInteger(N, M) {
    const randomInteger = Math.floor(Math.random() * (M - N + 1)) + N;
    return randomInteger;
  }
  console.log(`Функція No5, яка повертає випадкова ціле число в діапазоні між 1 та 699: ${getRandomInteger(1, 699)}`)
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
  console.log(`Функція No6, яка рахує скільки разів повторюється літера а в слові Абревіатура: ${countLetterOccurrences('Абревіатура', 'а')}`)
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
  console.log(`Функція No7, яка конвертує 3700 грн в долар по курсу 37: ${convertCurrency('3700uah')}`)
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
  console.log(`Функція No8, яка ствоює рандомний пароль довжиною 8 символів: ${getRandomPassword(length = 8)}`)

  
