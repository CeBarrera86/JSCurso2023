// Contacto

var producto = {
    nombre: 'Camiseta Argentina Adidas Original',
    descripcion: 'Titular de 3 estrellas 2022',
    precio: '$ 31.999,00',
    disponible: 'en Stock',

    mostrarProducto: function () {
        console.log("Nombre: " + producto.nombre);
        console.log("Descripción: " + producto.descripcion);
        console.log("Precio: " + producto.precio);
        console.log("Disponibilidad: " + producto.disponible);
    },
};

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (event) {
    producto.mostrarProducto();
});