'use strict';
// -------------TASK1---------------------
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let messageOne;
messageOne = prompt('Enter password!')
if (messageOne === null) {
    messageOne = 'Отменено пользователем!'
} else if (messageOne === ADMIN_PASSWORD) {
    messageOne = 'Добро пожаловать!'
} else {
    messageOne = 'Доступ запрещен, неверный пароль!'
};
alert(messageOne);

// ------------------------TASK2-----------------------

const credits = 23580;
const pricePerDroid = 3000;
let numberDroids;
let totalPrice;

numberDroids = Number(prompt('Введите количество дроидов которые Вы хотите купить'))
if (numberDroids === 0 || Number.isNaN(numberDroids) === true) {
    console.log('Отменено пользователем!');
} else if ((totalPrice = numberDroids * pricePerDroid) > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log(`Вы купили ${numberDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
};

// --------------------------TASK3----------------------------
let costDelivery;
let countrySelection;

countrySelection = prompt('Укажите страну для доставки товара').toLowerCase();

switch (countrySelection) {

    case 'китай':
        costDelivery = 100;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);

        break;
    case 'южная америка':
        costDelivery = 250;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);

        break;
    case 'австралия ':
        costDelivery = 170;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);

        break;
    case 'индия':
        costDelivery = 80;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);

        break;
    case 'ямайка':
        costDelivery = 120;
        console.log(`Доставка в ${countrySelection} будет стоить ${costDelivery} кредитов`);

        break;
    default:
        console.log('В вашей стране доставка не доступна');

        break;
}