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

  function powerOfANumber(number, degree) {
    let result = 1;
    for(let i = 0; i<degree; i++) {
        result = result * number
    }
    return result;
  }
  console.log(powerOfANumber(3,3)); 