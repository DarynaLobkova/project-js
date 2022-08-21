const credits = 23580;
const pricePerDroid = 3000;

let message = prompt('How many droids do you want to buy?');

if (message === null) {
  console.log('Canceled by user');
} else {
  message = Number.parseInt(message);
  const totalPrice = message * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Insufficient funds on the account!');
  } else {
    const restOfCredits = credits - totalPrice;
    console.log(
      `You buy ${message} droids, left on the account ${restOfCredits} credits`);
  }
}