$(document).ready(function () {
    loadProductos().then(productos => {
        let listaProductos = $("#productosList");
        productos.forEach(producto => {
            let item = $(`<li id="${producto.id}">${producto.name} - ${producto.price} <button class="agregar-btn" data-id="${producto.id}">Agregar</button></li>`);
            listaProductos.append(item);
        });
    });

    // Agregar un evento click a los botones "Agregar"
    $("#productosList").on("click", ".agregar-btn", function () {
        const productId = $(this).data("id");
        addToCart(productId);
    });
});

function loadProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productos = [
                { id: 1, name: 'Televisor', price: 10000 },
                { id: 2, name: 'Cafetera', price: 1200 },
                { id: 3, name: 'Plancha', price: 500 }
            ];
            if (productos.length > 0) {
                resolve(productos);
            } else {
                reject('Error');
            }
        }, 3000);
    });
}

function addToCart(productId) {
    const producto = getProductById(productId);
    if (producto) {
        let listaCompras = $("#comprasList");
        let item = $(`<li>${producto.name} - ${producto.price}</li>`);
        listaCompras.append(item);
    }
}

function getProductById(productId) {
    const productos = [
        { id: 1, name: 'Televisor', price: 10000 },
        { id: 2, name: 'Cafetera', price: 1200 },
        { id: 3, name: 'Plancha', price: 500 }
    ];

    return productos.find(producto => producto.id === productId);
}