
                                  // TEST 1


// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//  premium: true,
  
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
// console.log(`${key}: ${user[key]}`);
// }
 



                                    // TEST 2


// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.

// const countProps = function (obj) {

// // const values= Object.values(obj)
// //     return values.length
  
//     return Object.values(obj).length;
    
  
// }
// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2, })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
    



                                    // TEST 3
//   Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и 
// возвращает имя самого продуктивного(который выполнил больше всех задач).
// const findBestEmployee = function (employees) {

const findBestEmployee = function (employees) {

    const values = Object.values(employees)
    const keys = Object.keys(employees)

    for (const value of values) {
        let score = values;
        let bestScore = Math.max(...score); 
      

   console.log(bestScore)
    }
  
//  
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux


                                //   TEST 4
//   Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
//   Функция считает общую сумму запрплаты работников и возращает ее.
//   Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
    
//     const values = Object.values(employees);
//     let totalSalary = 0;
    
//     for (const value of values) {
//         // console.log(value);
        
//         totalSalary += value;
       
//     }
 
//  return totalSalary

// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400                              


                                //   TEST 5
//    Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов
//     и имя свойства.Возвращает массив значений определенного свойства prop из 
//     каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const values = [];
//   for (const product of products) {
//     if (prop in product) {
//       values.push(product[prop]);
//     }
//   }

//   return values;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []     


                                //    TEST 6 
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//     которая получает массив объектов и имя продукта(значение свойства name).
//     Возвращает общую стоимость продукта(цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {

//     let totalProduct = 0;
//     for (const product of products) {
//         if (productName === product.name) {
           
//         totalProduct += product.price * product.quantity; 
//         }
    
//     }
//     return totalProduct
 
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800