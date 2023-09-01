// Calificaciones de estudiantes

var clase = [
    {
        nombre: 'Santino',
        calificacion: [6, 7, 8 ,9, 7],
    },
    {
        nombre: 'Clemente',
        calificacion: [7, 8, 9, 6, 6],
    },
    {
        nombre: 'Alma',
        calificacion: [8, 9, 10, 10, 6],
    },
];

// Función para calcular el promedio con Array como parámetro
function calcularPromedio(array) {
    var suma = 0;
    for (let element of array) {
        suma += element;
    }
    var promedio = suma / array.length;
    return promedio;
};

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function () {
    clase.forEach(element => {
        console.log("Nombre: " + element.nombre + ", Promedio: " + calcularPromedio(element.calificacion));
    });
});