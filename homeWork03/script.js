let str11 = 'i have a new string'
console.log(str11.split(""));
var names = 'Гарри Трамп ;Фрэд Барни; Хелен Ригби ; Билл Абель ;Крис Ханд ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);
var myString = 'Привет, мир. Как дела?';
var splits = myString.split(' ', 3);

console.log(splits);