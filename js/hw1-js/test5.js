
let message = prompt('What is you country?');
let price;

message = message[0].toUpperCase() + message.slice(1).toLowerCase();

switch (message) {
    case 'China':
    price = 100;
    alert(`Shipping to ${message} will cost ${price} credits`);
    break;

  case 'Chili':
    price = 250;
    alert(`Shipping to ${message} will cost ${price} credits`);
    break;

  case 'Australia':
    price = 170;
    alert(`Shipping to ${message} will cost ${price} credits`);
    break;

 case 'India':
    price = 80;
    alert(`Shipping to ${message} will cost ${price} credits`);
    break;
    
   case 'Jamajka':
   price = 120;
    alert(`Shipping to ${message} will cost ${price} credits`);
    break;  
    

  default:
    alert('Delivery is not available in your country');
}


