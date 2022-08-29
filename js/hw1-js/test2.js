const total = 100;
const ordered = 50;

let message;

if (ordered > total) {
  message = `There aren't enough creatures in the warehouse!`;
} else {
  message = `The order is placed, the manager will contact you`;
}

console.log(message); 

// const total = 100;
// const ordered = 130;

// let message;

// if (ordered > total) {
//   message = `There aren't enough creatures in the warehouse!`;
// } else {
//   message = `The order is placed, the manager will contact you`;
// }

// console.log(message); 