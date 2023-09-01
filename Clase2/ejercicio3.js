// Tienda en Línea

var producto = {
    nombre: 'Camiseta Argentina Adidas Original',
    descripcion: 'Titular de 3 estrellas 2022',
    precio: '$ 31.999,00',
    disponible: 'en Stock',

    mostrarProducto: function () {
        return this;
    },
};

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function () {
    datos = producto.mostrarProducto();
    console.log("Nombre: " + datos.nombre + '\n' + "Descripción: " + datos.descripcion + '\n' + "Precio: " + datos.precio + '\n' + "Disponibilidad: " + datos.disponible);
});