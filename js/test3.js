const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Please enter your password:');
if (message === null) {
    message = 'Canceled by user!';
} else if (message === ADMIN_PASSWORD) {
    message = 'Welcome';
} else {
    message = 'Access denied, wrong password!';
}
alert(message);

// switch (message) {
//   case null:
//     message = 'Canceled by user!';
//     break;
//   case ADMIN_PASSWORD:
//     message = 'Welcome';
//     break;
//   default:
//     message = 'Access denied, wrong password!';
// }

// alert(message);


