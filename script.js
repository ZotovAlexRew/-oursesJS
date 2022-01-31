let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
//screens = screens.toLowerCase().split(",");
let screenPrice = prompt('Сколько будет стоить данная работа?');
let rollback = 650;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let fullPrice =  Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Number(fullPrice) - Number(rollback/100);




console.log(title);
//console.log(screens.length);
console.log(screens);
console.log(screenPrice);
//console.log("Стоимасть разработки сайтов" + " " + rollback + " " + "долларов");
//console.log(typeof fullPrice);
console.log(adaptive);
//console.log(fullPrice * (rollback / 100));
//alert("Прохожу курсы от GloAcadevy");
//console.log("Меня зовут Саша");
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));


if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice == 0){
  console.log("Скидки нет");
} else if (fullPrice < 0) {
  console.log("Упс, что-то пошло не так!");
}