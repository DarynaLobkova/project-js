                                     // SLICE

// function formatMessage(message, maxLength) {
//   let result;
//  result = message.length <= maxLength? message : message.slice( 0, maxLength) + '...'

//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];


// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

                                    // SWITCH

// function getShippingCost(country) {
//   let message;

  
// switch (country) {
//   case 'China' :
//     price = 100;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case 'Chile' :
//      price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case 'Australia':
//     price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   case 'Jamaica':
//      price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//   default: message = `Sorry, there is no delivery to your country`;
  
// }

  
//   // Change code above this line
//   return message;
// }
//   console.log(getShippingCost("Australia"));
//    console.log(getShippingCost("China"));
//   console.log(getShippingCost("Germany"));
//   console.log(getShippingCost("Chile"));
//   console.log(getShippingCost("Jamaica"));
//   console.log(getShippingCost("Sweden"));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//     message = "Canceled by user!";
//     break;
//     case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;
//     default: message = "Access denied, wrong password!";
      
//   }

 

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("mangohackzor"));

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case 'starter': // Change this line
//       price = 0 ; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));


                               // Ternatnyj operator


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password === ADMIN_PASSWORD? "Access is allowed" : "Access denied, wrong password!"
//   // Change code below this line

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// message = ordered > available? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
 
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

                             // Lower / UpperCase

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));
                                     

                                    //  Includes

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));


// function checkForSpam(message) {
//   let result;

//   const wordToFind1 = 'spam';
//   const wordToFind2 = 'sale';
//   message = message.toLowerCase() + message.toUpperCase;
//   result =  message.includes(wordToFind1) || message.includes(wordToFind2);



 
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
