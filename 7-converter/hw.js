/*
Задание:

    Создать функцию конвертации валют, принимающую три параметра:
        Сумма для конвертации
        Исходная валюта
        Целевая валюта

Пример работы функции:

    Примерно 1000 рублей к долларам вернет $30.

Обработка ошибок:

    Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.

Логика функции:

    В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
    Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
    Если курс конвертации для заданной пары валют отсутствует, возвращается null.

Расширение функциональности:

    Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
    Протестируйте функцию с различными входными данными.
*/

let RUBtoUSD = 0.011;
let RUBtoEUR = 0.010;
let RUBtoCNY = 0.080;
let RUBtoKZT = 5.44;

let KZTtoRUB = 0.18;
let KZTtuUSD = 0.0020;
let KZTtuEUR = 0.0019;
let KZTtoCNY = 0.015;

let USDtoRUB = 91.07;
let USDtoEUR = 0.95;
let USDtoCNY = 7.25;
let USDtoKZT = 495.40;

let EURtoRUB = 95.50;
let EURtoUSD = 1.05;
let EURtoCNY = 7.61;
let EURtoKZT = 520.44;

let CNYtoRUB = 12.55;
let CNYtoUSD = 0.14;
let CNYtoEUR = 0.13;
let CNYtoKZT = 68.88;

// rub, eur, usd, cny, kzt, 

function course(startCurrency,finalCurrency){
switch(startCurrency){
    case 'RUB':
        switch(finalCurrency){
        case 'USD':
        return RUBtoUSD;
        case 'EUR':
        return RUBtoEUR;
        case 'CNY':
        return RUBtoCNY;
        case 'KZT':
        return RUBtoKZT;
        default:
        return null;
        }
    case 'KZT':
        switch(finalCurrency){
            case 'USD':
            return KZTtuUSD;
            case 'EUR':
            return KZTtuEUR;
            case 'CNY':
            return KZTtoCNY;
            case 'RUB':
            return KZTtoRUB;
            default:
            return null;
        }
    case 'USD':
        switch(finalCurrency){
            case 'KZT':
            return USDtoKZT;
            case 'EUR':
            return USDtoEUR;
            case 'CNY':
            return USDtoCNY;
            case 'RUB':
            return USDtoRUB;
            default:
            return null;
        }
    case 'EUR':
        switch(finalCurrency){
            case 'USD':
            return EURtoUSD;
            case 'KZT':
            return EURtoKZT;
            case 'CNY':
            return EURtoCNY;
            case 'RUB':
            return EURtoRUB;
            default:
            return null;
        }
    case 'CNY':
        switch(finalCurrency){
            case 'USD':
            return CNYtoUSD;
            case 'KZT':
            return CNYtoKZT;
            case 'EUR':
            return CNYtoEUR;
            case 'RUB':
            return CNYtoRUB;
            default:
            return null;
        }
    default:
        return null;
}
}

function converter(money, startCurrency, finalCurrency){
    return money * course(startCurrency,finalCurrency);
}

console.log(converter(100,'KZT','CNY'));

console.log('kys');