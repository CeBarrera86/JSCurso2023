// Película Favorita

var usuario = {
    nombre: "Cesar",
    peliculasFavoritas: [
        {
            titulo: 'Minions',
            anio: 2015,
        },
        {
            titulo: 'Titanic',
            anio: 1997,
        },
        {
            titulo: 'Avatar',
            anio: 2009,
        }
    ],
};

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function (event) {
    console.log("El título de la segunda película es: " + usuario.peliculasFavoritas[1].titulo);
});