const ukraine = {
    tax: 0.195,
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = {
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15,
    middleSalary: 1509, 
    vacancies: 1114 
};

function getTaxes(salary) {
    return this.tax * salary;
  };

console.log(`Податок в Україні: ${getTaxes.call(ukraine, 3000)}`);
console.log(`Податок в Латвії: ${getTaxes.call(latvia, 3000)}`);
console.log(`Податок в Литві: ${getTaxes.call(litva, 3000)}`);

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
  };

console.log(`Середній податок в Україні: ${getMiddleTaxes.call(ukraine)}`);  
console.log(`Середній податок в Латвії: ${getMiddleTaxes.call(latvia)}`);  
console.log(`Середній податок в Литві: ${getMiddleTaxes.call(litva)}`); 

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
  };

console.log(`Загальний податок в Україні: ${getTotalTaxes.call(ukraine)}`);  
console.log(`Загальний податок в Латвії: ${getTotalTaxes.call(latvia)}`);  
console.log(`Загальний податок в Литві: ${getTotalTaxes.call(litva)}`); 

function getMySalary() {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);
    const taxes = this.tax * salary;
    const profit = salary - taxes;
  
    const result = {
      salary: salary,
      taxes: taxes,
      profit: profit,
    };
  
    console.log(result);
  };

console.log(`Ukraine ${setInterval(getMySalary.bind(ukraine), 10000)}`);
console.log(`Latvia ${setInterval(getMySalary.bind(latvia), 10000)}`);
console.log(`Litva ${setInterval(getMySalary.bind(litva), 10000)}`)

  