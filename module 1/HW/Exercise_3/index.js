'use strict';

const ADMIN_PASSWORD = 'dimasik';
const userPassword = prompt('Enter pasword');
let message;

if (userPassword === null) {
  message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
