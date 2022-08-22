
let total = 0;
let input;

do {
    input = prompt('Enter a number')
    total += Number(input);
   console.log(input);
  console.log(total);}
while (input) 
if (input === null) { 
    alert(`The total sum of the numbers is ${total}`)
}
console.log("total", total); 


// if (input === null) {
//   alert (`The total sum of the numbers is ${total}`)
// }



// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
