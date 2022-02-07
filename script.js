
const appData = {
  title: '',
  screens: [],
  adaptive: true,
  services: {},
  rollback: 10,
  fullPrice: 0,
  screenPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,

  isNumber: function(num) 
  {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function() {
    //appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    //appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные");

    //do {
    //    appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    //} 
    //    while (!appData.isNumber(appData.screenPrice));

    //appData.screenPrice = +appData.screenPrice;

    for( let i = 0; i < 2; i++)
    {
      let name = prompt('Какие типы экранов нужно разработать?');
      let price = 0;

      do {
        appData.price = prompt('Сколько будет стоить данная работа?');
    } 
        while (!appData.isNumber(appData.price));

        appData.screens.push({id: i, name: name, price: price});
    }

    for( let i = 0; i < 2; i++)
    {
      let name = prompt('Какой дополнительный тип услуги нужен?');
      let price = 0;
      
      do 
      {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
  },

  getAllServicePrices: function() {
    for(let key in appData.services)
    {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function(screen, service) 
  {
    appData.fullPrice =  screen + service;
  },
  
  getServicePercentPrices: function(per, resultPrice) 
  {
    appData.servicePercentPrice = Math.ceil(resultPrice - resultPrice * (per / 100));
  },

  getTitle: function() 
  {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
  },

  getRollbackMessage: function(price) {
    if (price > 30000) {
      return"Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return"Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return"Скидка не предусмотрена.";
    } else if (price < 0) {
      return"Упс, что-то пошло не так!";
    }
  },

  logger: function(){
    for (let key in appData) {
      console.log(`${key}: ${appData[key]}`);
    }
  },

  start: function(){
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getServicePercentPrices(appData.rollback, appData.fullPrice);
    appData.getTitle();


    appData.logger();
  },

};

appData.start();
