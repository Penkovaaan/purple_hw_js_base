/*
Напишите функцию, которая принимает:

-Массив чисел
-Функцию удаления элементов

И возвращает отфильтрованный массив. 
При этом функция удаления элементов принимает число и возвращает true,
если его надо удалить и false, если надо оставить
*/

let mass = [3, 6, 34, 18, 2, 13, 11]


function more (num, lim) {
    return num >= lim;
}

function less (num, lim) {
   return num <= lim;
}

function arrayClean (arr, fn) {
    let result = [];
    for (let element of arr) {
    if (fn(element)) {
        result.push(element);
    }
}
    return result;
}

console.log(arrayClean(mass, (num) => less(num, 10)));
console.log(arrayClean(mass, (num) => more(num, 10)));