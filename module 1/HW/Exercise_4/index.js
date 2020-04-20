'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const answ = prompt('Сколько хочеш купить дронов', 0);
const totalPrice = +answ * pricePerDroid;

if (answ === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${answ} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
