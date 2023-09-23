class Producto {
    constructor(nombre, precio, stock, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
    }

    getInformacionProducto() {
        return "Nombre: " + this.nombre + " | Precio: " + this.precio + " | Stock " + this.stock + " | Tipo " + this.tipo + " ";
    }
}

class ProductoElectronico extends Producto {
    constructor(nombre, precio, stock, tipo, potencia) {
        super(nombre, precio, stock, tipo);
        this.potencia = potencia;
    }

    getPotencia() {
        return this.potencia;
    }
}

class ProductoAlimenticio extends Producto {
    fechaVencimiento;
    alimentoPerecedero;
    constructor(nombre, precio, stock, tipo, fechaVencimiento, alimentoPerecedero) {
        super(nombre, precio, stock, tipo);
        this.fechaVencimiento = fechaVencimiento;
        this.alimentoPerecedero = alimentoPerecedero;
    }

    tipoAlimento() {
        let respuesta = "";

        if (this.alimentoPerecedero) {
            respuesta = this.nombre + ' es un alimento perecedero.';
        } else {
            respuesta = this.nombre + ' no es un alimento perecedero.';
        }

        return respuesta;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(index) {
        this.productos.splice(index, 1);
    }

    calcular_total() {
        return this.productos.reduce((a, b) => a + parseInt(b.precio), 0);
    }

    vaciarCompleto() {
        this.productos.splice(0, this.productos.length);
    }
}

//inicio de variables
const carrito = new Carrito();

function agregarAlCarrito(elemento) {
    let index = $(elemento).attr("data-id");
    let nombreProducto = $("#producto_" + index + " .nombre").text();
    let precio = $("#producto_" + index + " .precio").text();

    if ($("#producto_" + index).hasClass("electronico")) {
        let potencia = $("#producto_" + index + " .potencia").text();
        let tipoProducto = $(elemento).attr("data-tipo");
        let p1 = new ProductoElectronico(nombreProducto, precio, 1, tipoProducto, potencia);
        carrito.agregarProducto(p1);
    } else {
        let fechaVencimiento = $("#producto_" + index + " .caducidad").text();
        let alimentoPerecedero = true;
        let tipoProducto = $(elemento).attr("data-tipo");
        let p2 = new ProductoAlimenticio(nombreProducto, precio, 1, tipoProducto, fechaVencimiento, alimentoPerecedero);
        carrito.agregarProducto(p2);
    }

    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = $("#lista-carrito");

    listaCarrito.empty();

    carrito.productos.forEach((producto, index) => {
        const li = $("<li>").text(producto.getInformacionProducto()); // Use the getInformacionProducto method
        const eliminarBtn = $("<button>").text("Eliminar");

        eliminarBtn.click(() => eliminarDelCarrito(index));

        li.append(eliminarBtn);
        listaCarrito.append(li);
    });

    if (carrito.productos.length > 0) {
        $("#vaciar").show();
    } else {
        $("#vaciar").hide();
    }
   
    $("#cantidad").html(carrito.productos.length);
    $("#total").html(carrito.calcular_total());
}

function eliminarDelCarrito(index) {
    carrito.eliminarProducto(index);
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito.vaciarCompleto();
    mostrarCarrito();
}

mostrarCarrito();
