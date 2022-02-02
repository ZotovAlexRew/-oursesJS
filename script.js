let arr;
let title;
let screens;
let adaptive;
let service1;
let service2;
let fullPrice;
let screenPrice;
let rollback = 650;
let allServicePrices;
let servicePercentPrice;


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title       = prompt('Как называется ваш проект?');
    screens     = prompt('Какие типы экранов нужно разработать?');

    screenPrice = +prompt('Сколько будет стоить данная работа?');

    while (!isNumber(screenPrice)) {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    }
    
    
    adaptive    = confirm('Нужен ли адаптив на сайте?');
    
};


const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getTitle = function(str) {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function stringToArray(array){
  return array.toLowerCase ().trim().split(" ");
}

let getAllServicePrice = function() {
  let sum = 0;

  for( let i = 0; i < 2; i++) {
      
    if ( i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if ( i === 1){
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    sum = prompt('Сколько это будет стоить?');
    
    while (!isNumber(sum)) {
        sum = prompt('Сколько это будет стоить?');
    }
    
  }

  return sum;
};

function getFullPrice(priceOfWork, allServicePrices) {
  return priceOfWork + allServicePrices;
}

const getServicePercentPrices =function(fullPrice, rollback) {
  return fullPrice - rollback/100;
};

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

asking();
title = getTitle(title);
arr = stringToArray(screens);
allServicePrices = getAllServicePrice();
fullPrice = getFullPrice(+screenPrice, +allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(title);
console.log(arr);
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая сумма: " + Math.ceil(getServicePercentPrices(fullPrice, rollback)));
