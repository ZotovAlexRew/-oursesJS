let title               = prompt('Как называется ваш проект?');
let screens             = prompt('Какие типы экранов нужно разработать?');
let screenPrice         = prompt('Сколько будет стоить данная работа?');
let rollback            = 650;
let adaptive            = confirm('Нужен ли адаптив на сайте?');
let service1            = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1       = prompt('Сколько это будет стоить?');
let service2            = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2       = prompt('Сколько это будет стоить?');




const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getTitle = function(title) {
  title = title.trim();
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};
title = getTitle(title);

function stringToArray(screens){
  return screens.toLowerCase ().trim().split(" ");
}
let arr = stringToArray(screens);

let getAllServicePrice = function(servicePrice1, servicePrice2) {
  return Number(servicePrice1) + Number(servicePrice2);
};
let allServicePrices = getAllServicePrice(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
  return Number(screenPrice) + Number(allServicePrices);
}
let fullPrice = getFullPrice(screenPrice, allServicePrices);

const getServicePercentPrices =function(fullPrice, rollback) {
  return Number(fullPrice) - Number(rollback)/100;
};
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

const getRollbackMessage = function(price) {
    if (price > 30000) {
      return"Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return"Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return"Скидка не предусмотрена.";
    } else if (price < 0) {
      return"Упс, что-то пошло не так!";
    }
};



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(title);
console.log(arr);
console.log(getRollbackMessage(fullPrice));
console.log(Math.ceil(getServicePercentPrices(fullPrice, rollback)));
