let input;
const numbers = [];
let total = 0;


for (let i = 0; true; i += 1) {
  input = prompt('Enter a number');
  numbers.push (input)

  console.log (numbers)

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Not a number, try again');
    numbers.pop (input)
    continue;
  }

  total += input;
  console.log('Total sum: ', total);
}

alert(`The total sum of the numbers is ${total}`);