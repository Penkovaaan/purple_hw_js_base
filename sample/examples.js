/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:

    Boolean переменную успеете ли вы взяться за работу
    Сколько вы за неё попросите?

*/

const avalibleWorkDays = 11 - 2;
const workHours = 40;
const maxDayHour = 5;
const hourPayment = 80;
let mens = 8; //sadkfnu

console.log(avalibleWorkDays>(workHours/(maxDayHour)));
console.log(`${workHours*hourPayment} $`);


console.log(Number('10-1'));