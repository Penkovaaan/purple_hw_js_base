/*
Задача:

    Рассчитать дистанцию от текущего местоположения пользователя до желаемой точки назначения.
    Местоположения задаются через координаты (широта и долгота), обозначаемые как latitude (широта) и longitude (долгота).

Входные Данные:

    Текущее местоположение пользователя (Position Latitude, Position Longitude)
    Местоположение точки назначения (Destination Latitude, Destination Longitude)

Задача Программирования:

    Написать код, который рассчитывает расстояние от текущей точки до точки назначения, представляя расчет как нахождение диагонали прямоугольника (используя основы тригонометрии или геометрии).
    Для расчетов можно воспользоваться приемами математики, вспомнить знания из школы или найти формулу в интернете.
*/

//Не совсем понятно было из задания каким способом задавать координатам значения, поэтому сделала через promt
let positionLatitude = prompt('Координата X1', 1);
console.log(`Координата X1: ${positionLatitude}`);

let positionLongitude = prompt('Координата Y1', 1);
console.log(`Координата Y1: ${positionLongitude}`);

let destinationLatitude = prompt('Координата X2', 2);
console.log(`Координата X2: ${destinationLatitude}`);

let destinationLongitude = prompt('Координата Y2', 2);
console.log(`Координата Y2: ${destinationLongitude}`);

// вывод результата
let result = (((destinationLatitude-positionLatitude)**2 + (destinationLongitude-positionLongitude)**2)**(1/2));

console.log(`Расстояние от текущего местоположения до точки назначения: ${result}`);