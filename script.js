let title               = prompt('Как называется ваш проект?');
let screens             = prompt('Какие типы экранов нужно разработать?');
//screens               = screens.toLowerCase().split(",");
let screenPrice         = prompt('Сколько будет стоить данная работа?');
let rollback            = 650;
let adaptive            = confirm('Нужен ли адаптив на сайте?');
let service1            = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1       = prompt('Сколько это будет стоить?');
let service2            = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2       = prompt('Сколько это будет стоить?');
let fullPrice           = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Number(fullPrice) - Number(rollback/100);





if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена.");
} else if (fullPrice < 0) {
  console.log("Упс, что-то пошло не так!");
}


console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(typeof fullPrice);
console.log(screens.length);


console.log("Стоимасть разработки сайтов" + " " + rollback + " " + "долларов");

console.log("Название проекта: " + title);
console.log("Тип экрана: " + screens);
console.log("Стоимость: " + screenPrice);
console.log(adaptive);
//console.log(fullPrice * (rollback / 100));
//alert("Прохожу курсы от GloAcadevy");
//console.log("Меня зовут Саша");
console.log("Услуга: " + service1);
console.log("Цена: " + servicePrice1);
console.log("Услуга: " + service2);
console.log("Цена: " + servicePrice2);
console.log("Полная стоимость: " + fullPrice);
console.log("Итоговая стоимость: " + Math.ceil(servicePercentPrice));
