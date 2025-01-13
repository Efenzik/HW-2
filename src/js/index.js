"use strict";

// 1=======================

let celsius = 13;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("Фаренгейтів : ", fahrenheit);

// 2=======================

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;

console.log("У місяці : ", daysInMonth, "днів");
console.log("У місяці : ", hoursInMonth, "годин");
console.log("У місяці : ", minutesInMonth, "хвилин");

// 3=======================

let health = 100;
let energy = 135;

console.log("Твоє здоров'я : ", health);
console.log("Твоя енергія : ", energy);

console.log("Тепер твоє здоров'я : ", health - 35);
console.log("Тепер твоя енергія : ", energy - 75);

// 4=======================

let totalPrice = 148852;
let discount = totalPrice * 0.1;
let discountedPrice = totalPrice - discount;

console.log("Кількість грошей для покупки : ", totalPrice);
console.log("Знижка : ", discount, "грн");
console.log("Чек(грн) після знижки : ", discountedPrice);

// 5=======================

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);

console.log("Твоє заокруглене число : ", roundedDown);

// 6=======================

const floatString = "45.67";
const parsedFloat = parseFloat(floatString);

console.log("Результат числа з плаваючою комою : ", parsedFloat);

// 7=======================

const intString = "123";
const parsedInt = parseInt(intString);

console.log("Результат цілого числа : ", parsedInt);

// 8=======================

const number = 1369;
const sqrtNumber = Math.sqrt(number);

console.log("Результат квадратного кореня : ", sqrtNumber);

// 9=======================

const integer = 42;
const stringNumber = "256";

const convertedString = integer.toString();
const convertedInt = parseInt(stringNumber);

console.log("Рядкове число в ціле : ", convertedInt);
console.log("Ціле число в рядкове : ", convertedString);
