// Solicitar al usuario que ingrese tres estudiantes con propiedades como nombre
// y calificaciones, que es un array de números.
// Agrega al menos tres estudiantes y muestra en la consola el promedio de calificaciones
// de cada estudiante.
// Esto tiene que hacerse con HTML y Javascript, donde el usuario ingrese tres nombres de
// estudiantes distintos y sus notas correspondientes.
// Cuando termine de ingresar los nombres, el botón se tiene que deshabilitar.
// Hacer las validaciones correspondientes. Hacer un boton reset para volver a empezar

var calificaciones = [];
var clase = [];
var count = 0;

const datos = document.querySelector('#form-data')
datos.addEventListener("submit", cargarEstudiantes);

// Constructor de Estudiante
function Estudiante(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
};

// Limpia los inputs del form luego de insertar los datos
function limpiarCampos() {
    datos.querySelector('#nombre').value = '';
    datos.querySelector('#nota1').value = '';
    datos.querySelector('#nota2').value = '';
    datos.querySelector('#nota3').value = '';
};

// Función que calcula el promedio por estudiante
function calcularPromedio(array) {
    let promedio = 0
    aux = [];
    if (array != undefined && array != '') {
        for (let element of array) {
            promedio = element.calificaciones.reduce((a, b) => a + b) / element.calificaciones.length;
            alumno = {
                'nombre': element.nombre,
                'promedio': promedio,
            };
            aux.push(alumno);
        }
    }
    return aux;
};

// Función para cargar los estudiante después del submit del botón
function cargarEstudiantes() {
    const e = new Estudiante(datos.nombre.value, [parseInt(datos.nota1.value), parseInt(datos.nota2.value), parseInt(datos.nota3.value)])
    clase.push(e);

    limpiarCampos();

    if (count == 2) {
        datos.querySelector('#ingresar').disabled = true;
        console.log(calcularPromedio(clase));
    }
    count++;
}