/*
    Цель: Реализовать сортировку массива чисел с помощью циклов.
    Задание: Написать функцию, принимающую массив чисел и параметр сортировки
    (по убыванию или возрастанию) и возвращающую отсортированный массив.
    Использовать вложенный цикл

    Массив чисел: [1, 40, -5, 10, 0].
*/

let arr = [1, 40, -5, 10, 0];

function decreaseLoop (arr) {
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++)
        if (arr[j]<arr[i]){
            let num = arr[j];
            arr[j] = arr[i];
            arr[i] = num;
        }
    }
    return arr;
}


function increaseLoop (arr){
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++)
        if (arr[j]>arr[i]){
            let num = arr[i];
            arr[i] = arr[j];
            arr[j] = num;
        }
    }
    return arr;
}

console.log(decreaseLoop(arr));
console.log(increaseLoop(arr));
