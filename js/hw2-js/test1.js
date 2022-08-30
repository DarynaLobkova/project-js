const logItems = function (array) {
    
    for (let i = 0; i <= array.length - 1; i += 1) {
        const number = i + 1;
        const item = array[i];
        console.log(`${number} - ${item}`);
  
}

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

