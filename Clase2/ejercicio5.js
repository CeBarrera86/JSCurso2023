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

function masJoven(array) {
    var menor = array[0];
    for (let element of array) {
        if(element.edad < menor.edad){
            menor = element;
        }
    }
    return menor.nombre;
};

// Muestra el nombre del amigo más joven
const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function () {
    console.log("El nombre es: " + masJoven(perfil.amigos));
});