let n;
let m;
do {
  n = parseInt(prompt("Введіть ціле число N:"));
} while (isNaN(n) || !Number.isInteger(n) || n < 0);
do {
  m = parseInt(prompt("Введіть ціле число M (більше за N):"));
} while (isNaN(m) || !Number.isInteger(m) || m < n);

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