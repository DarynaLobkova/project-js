
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




// Var 2
// let input;
// let total = 0;

// do {
//   input = prompt('Enter a number');
//   console.log(input);

//   let enteredData = Number(input);
//   console.log(enteredData);

//   if (Number.isNaN(enteredData)) {
//     console.log('Total sum ', total);
//     alert('Not a number, try again');
//     continue;
//   }

//   total += enteredData;
//   console.log('Total sum: ', total);
// } while (input !== null);

// alert(`The total sum of the numbers is ${total}`);





// Var 3
// / let input;
// let total = 0;

// for (let i = 0; true; i += 1) {
//   input = prompt('Enter a number');
//   console.log(input);

//   if (input === null) {
//     break;
//   }

//   input = Number(input);

//   if (Number.isNaN(input)) {
//     alert('Not a number, try again');
//     continue;
//   }

//   total += input;
//   console.log('Total sum: ', total);
// }

// alert(`The total sum of the numbers is ${total}`);

