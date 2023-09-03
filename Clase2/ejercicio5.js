// Red Social

var perfil = {
    nombre: 'Cesar',
    edad: 36,
    amigos: [
        {
            nombre: 'Laura',
            edad: 35,
        },
        {
            nombre: 'Myrian',
            edad: 38,
        },
        {
            nombre: 'Alexis',
            edad: 26,
        },
        {
            nombre: 'Claudio',
            edad: 36,
        },
    ],
};

// Función que obtiene el amigo más joven.
function masJoven(array) {
    var menor = array[0];
    for (let element of array) {
        if (element.edad < menor.edad) {
            menor = element;
        }
    }
    return menor.nombre;
};

// Función que ordena los nombre según su edad de menor a mayor
function menorMayor(array) {
    let largo = array.length;
    let aux = 0;
    let amigos = [];
    if (array != undefined && array != '') {
        for (let i = 0; i < largo; i++) {
            for (let j = i + 1; j < largo; j++) {
                if (array[i].edad > array[j].edad) {
                    aux = array[j];
                    array[j] = array[i];
                    array[i] = aux;
                }
            }
        }
    }
    array.forEach(element => { amigos.push(element.nombre); });
    return amigos;
};

// Muestra el nombre del amigo más joven
const btn5 = document.querySelector('#btn5');
var amigos = [];
btn5.addEventListener('click', function () {
    console.log("El nombre es: " + masJoven(perfil.amigos));
    console.log("Amigos ordenados de menor a mayor:" + menorMayor(perfil.amigos));
});

// Ordenar los números de menor a mayor (Ejercicio de Clase)
// let numero = [45, 8, 23, 24];
// let largo = numero.length;
// let aux = 0;
// for (let i = 0; i < largo; i++) {
//     for (let j = i + 1; j < largo; j++) {
//         if (numero[i] > numero[j]) {
//             aux = numero[j];
//             numero[j] = numero[i];
//             numero[i] = aux;
//         }
//     }
// }
// console.log(numero);