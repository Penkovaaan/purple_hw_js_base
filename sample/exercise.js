/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:

    Boolean переменную успеете ли вы взяться за работу
    Сколько вы за неё попросите?

*/

/*
const avalibleWorkDays = 11 - 2;
const workHours = 40;
const maxDayHour = 5;
const hourPayment = 80;
let mens = 8; //sadkfnu

console.log(avalibleWorkDays>(workHours/(maxDayHour)));
console.log(`${workHours*hourPayment} $`);


console.log(Number('10-1'));
*/



//5.2 Размещение депозита

/* Цель упражнения: Изучить использование условных операторов (Conditional Statement) на примере расчета сложных процентов для определения возможности покупки дома.

Задача: Рассчитать, сможет ли Вася купить дом стоимостью 13 500 долларов через 2 года, положив на счет 12 000 долларов под 7% годовых с ежемесячной капитализацией процентов.

Ключевые понятия:

    Капитализация
        добавление начисленных процентов к сумме вклада.
    Формула сложных процентов: Итоговая сумма = Вклад * (1 + ставка/12) ^ срок(в месяцах).

Практическое применение:

    Объявление необходимых переменных:
        Депозит: 12 000 долларов.
        Годовая ставка: 7% (0.07 в десятичной форме).
        Срок вклада: 24 месяца.
        Стоимость дома: 13 500 долларов.
    Расчет накоплений по формуле сложных процентов.
    Сравнение итоговой суммы с стоимостью дома с помощью условных операторов if и else.
    Вывод результата: возможность покупки и остаток денег.
*/

/*
const deposit = 12000;
const annualRate = 0.07;
const durationDeposit = 24;
const houseCost = 13500;
let totalAmount = deposit * (1 + annualRate/12) ** 24;

if ( totalAmount >= houseCost) {
    console.log('Вася сможет купить дом');
    console.log(totalAmount - houseCost);
} else {
    console.log('Вася не сможет купить дом');
    console.log(`Потому что Вася накопил всего лишь ${totalAmount} $`);
}
*/

/*
Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". 
Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!",
а если он введёт "Я не робот", то тоже "Успех".

Цель Упражнения:

    Создать упражнение для отличия роботов от человек.

Задача:

    Запросить у пользователя ответ на вопрос "сколько будет 7 плюс/минус 15?".

Метод реализации:

    Использование метода prompt в браузере для запроса ввода от пользователя.
    Обработка возможных ответов:
        Приемлемые ответы: числа 22, -8, или строка "я не робот".
        Неприемлемый ответ: любой другой ввод считается как робот.
*/

/*
let answer = prompt('Сколько будет 7 +- 15?');

switch (true){
    case answer == 22:  
	console.log('Успех');
    break;
    case answer == -8:  
	console.log('Успех');
    break;
    case answer == 'Я не робот':  
	console.log('Успех');
    break;
    default:
    console.log('Проверка не пройдена')
}
    */


/*
Пользователь хочет приобрести игру в магазине
Он может это сделать если:
- его баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
- он не забанен (isBanned)
- игра не куплена (isExist)
- игра в продаже (isSelling)
Напишите условие для покупки и выведите результат
*/

/*
let balance = 1200;
let bonusBalance = 100;
let isBanned = false;
let isExist = false;
let isSelling = true;

let result = (balance > 1000||bonusBalance > 100) && !isBanned && !isExist && isSelling;

console.log(result ? 'Игрок может купить игру :)' : 'Игрок не может купить игру :(');

*/

/* Переписать функцию в стрелочную */

/*
function toPower(num, power){
    const res = num ** power;
    return res;
}

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2,3));
*/

/*
Пользователь:

    Возраст
    Наличие работы
    Деньги

Нужно проверить может ли он купить новый MacBook за 2000$?
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24-х лет и он имеет работу,
100$ если ему просто больше 24-х лет и 0 в ином случае. 
Напишите функцию, которая принимает данные пользователя и товара
 и возвращает true или false.
*/

/*
const macBookCost = 2000;

function creditAmount (age, work){
    if (age >= 24 && work == true){
        return 500;
    } else if (age >= 24 && work == false){
        return 100;
    }
    return 0;
}

function canBuy (money, age, work) {
    if (money >= macBookCost){
        return 'Может купить';
    } else if (money + creditAmount(age, work) >= macBookCost){
        return 'Может купить, если возьмет кредит';
    }
    return 'Не может купить'
    }
    

    console.log(canBuy(1900, 25, false));

*/


/* 
Дан список задач

const tasks = ['Задача 1']; Сделать функции:

    Добавление задачи в конец
    Удаление задачи по названию
    Перенос задачи в начало списка по названию

! Всегда меняем исходный массив
*/

/*
const tasks = ['Задача 1'];

function addToEnd (taskName){
    tasks.push(taskName);
}

function deleteTask (taskName){
    const indexTask = tasks.indexOf(taskName);
    if (indexTask === -1){
        return;
    }
    return tasks.splice(indexTask, 1);
}

function removeToStart (taskName){
    const res = deleteTask(taskName);
    if (!res){
        return;
    }
    tasks.unshift(res[0]);
}

addToEnd('Задача 2');
addToEnd('Задача 3');
console.log(tasks);

deleteTask('Задача 2');
console.log(tasks);

removeToStart('Задача 3')
console.log(tasks);

*/

/*
Дан произвольный url вида - https://purpleschool.ru/course/javascript

Нужно сделать функцию, которая выводит в консоль:

    Протокол (https)
    Доменное имя (purpleschool.ru)
    Путь внутри сайта (/course/javascript)
*/

/*
//мое решение
const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts (url){
    const [protokol, _, domain, ...path] = url.split('/');
    console.log(protokol.replace(':',''), domain, path.join('/'));
}

//console.log(getUrlParts(url));

//решение из видоса
function getUrlParts2 (url){
    const [protokol, _, domain, ...path] = url.split('/');
    return `Протокол: ${protokol.replace(':','')}\nДоменное имя: ${domain}\nПуть внутри сайта: /${path.join('/')}`;
}

//console.log(getUrlParts2(url));
*/

/*
    Необходимо написать цикл, который проходит по исходному массиву в обратном порядке и формирует новый массив с обратным порядком элементов.
    Исходный массив: ["!", "js", "люблю", "я"].
    Цель: Получить строку "я люблю js !".
*/

/*
const arr = ['!','js','люблю','я'];
let newArr = [];

for(let i = arr.length; i > 0; i--){
    newArr.push(arr[i-1]);
}
console.log(newArr.join(' '));

*/


/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а также начальный баланс в 100$
необходимо сделать функции расчета:
- итогового баланса
- наличия отрицательного баланса(если после очередной операции баланс < 0
то нужно вывести false, а если положительный true)
- рассчета среднего дохода и расходов
*/

/*
const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function totalAmount (arr, summ) {
    for (let index in arr) {
        summ += arr[index];
    }
    return summ;
}

function negativeBalance (arr, summ) {
    let balance = totalAmount(arr, summ);
        if (balance >= 0){
            return true;
        }
        return false;
}

function averageExpenceIncome (arr) {
    let positive = 0;
    let negative = 0;
    let index1 = 0;
    let index2 = 0;
    for (let index in arr) {
        if (arr[index] > 0){
            positive += arr[index];
            index1++;
        } else {
        negative -= arr[index];
        index2++;
        }
    }
    return `Средний доход: ${positive/index1} Средний расход: ${negative/index2}`
    }


console.log(totalAmount(operations, startBalance));
console.log(averageExpenceIncome(operations));
console.log(negativeBalance(operations, startBalance));
*/