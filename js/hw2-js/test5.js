const checkForSpam = function (message) {

    message = message[0].toUpperCase() + message.slice(1).toLowerCase();
    
const wordToFind1 = 'spam';
const wordToFind2 = 'sale';

    return (
        message.includes(wordToFind1) ||
        message.includes(wordToFind2));
 
  
  // твой код
};
 
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true