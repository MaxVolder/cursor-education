let n = parseInt(prompt("Введіть число N:"))
console.log(typeof(n));
if (!Number.isInteger(n)) {
    console.log("Введене значення N не є цілим числом.");
  };
  let m = parseInt(prompt("Введіть число M:"))
  console.log(typeof(m));
  if (!Number.isInteger(m)) {
      console.log("Введене значення M не є цілим числом.");
    };
    let skipEvenNumbers = confirm("Пропускати парні числа?");
    let sum = 0;
    let i 
    for (let i = n; i <= m; i++) {
        if (skipEvenNumbers && i % 2 === 0) {
          continue; 
        } else {
            sum += i;
        }

    };
    console.log('Sum is:', +sum);