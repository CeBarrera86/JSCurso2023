var array = [8, 18, 10, 36, 8, 8, 18, 10];
var array2 = ['hola', 'mundo', 'desde', 'la', 'función', 'sort']

// 1- Suma de elementos en un arreglo
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
    console.log("La suma es:", array.reduce((a, b) => a + b, 0));
});

// 2- Multiplicación de elementos en un arreglo
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    console.log("La multiplicación es:", array.reduce((a, b) => a * b));
});

// 3- Concatenación de cadenas
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function () {
    console.log("La concatenación es:", array.reduce((a, b) => a.toString() + b.toString()));
});

// 4- Calcular el promedio
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function () {
    console.log("El promedio es:", array.reduce((a, b) => a + b) / array.length);
});

// 5- Encontrar el valor máximo
const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function () {
    console.log("El valor máximo es:", array.reduce((a, b) => (a > b ? a : b), 0));
});

// 6- Contar ocurrencia
const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', function () {
    console.log("La ocurrencia es:", array.reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {}));
});

// 7- Ordenar palabras por longitud
const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', function () {
    console.log("El orden es:", array2.reduce((a, b) => {
        a.push(b);
        a.sort((a, b) => a.length - b.length);
        return a;
    }, []));
});

// 8- Búsqueda de un elemento en una rreglo
const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', function () {
    const valor = 8;
    console.log("La búsqueda es:", array.reduce((a, b) => (b == valor) ? true : a, false, 0));
});

// 9- Búsqueda de la primera coincidencia
const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', function () {
    const valor = 19;
    console.log("La primer coincidencia es:", array.reduce((a, b, i) => (b == valor && a == -1) ? i : a, -1));
});

// 10- Búsqueda de la última coincidencia
const btn10 = document.querySelector('#btn10');
btn10.addEventListener('click', function () {
    const valor = 19;
    console.log("La última coincidencia es:", array.reduce((a, b, i) => b == valor ? i : a, -1));
});