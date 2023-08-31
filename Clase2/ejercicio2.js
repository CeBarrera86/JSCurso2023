// Contacto

var contactos = [
    {
        nombre: 'Cesar',
        telefono: '08001112222',
        email: 'cesar@cesar.com',
    },
    {
        nombre: 'Noelia',
        telefono: '08002223333',
        email: 'noe@noe.com',
    },
    {
        nombre: 'Diego',
        telefono: '08003334444',
        email: 'diego@diego.com',
    }
];

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (event) {
    // Muestro elementos toales lista original
    console.log("Cantidad de elementos en la lista de contactos originales: " + contactos.length);

    // Agrego un elemento al final de la lista
    contactos.push({
        nombre: 'Milagros',
        telefono: '08004445555',
        email: 'mili@mili.com',
    });

    // Muestro elementos totales después de modificar la lista
    console.log("Cantidad de elementos en la lista de contactos modificada: " + contactos.length);
});