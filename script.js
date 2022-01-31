let title = "JS-курсы";
let screens = "Простые, Сложные, Интерактивные";
screens = screens.toLowerCase().split(",");
let screenPrice = 17;
let rollback = 99;
let fullPrice = 10000;
let adaptive = true;


console.log(typeof title);
console.log(screens.length);
console.log(screens);
console.log("Стоимасть верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимасть разработки сайтов" + " " + rollback + " " + "долларов");
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(fullPrice * (rollback / 100));
//alert("Прохожу курсы от GloAcadevy");
//console.log("Меня зовут Саша");

console.log(screens);