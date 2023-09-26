$(document).ready(function () {

    // 1- Seleccionar el primer y último elemento hijo <p> dentro del contenedor .container y
    // cambiar su color de texto a rojo.
    $(".container").find("p").last().css('color', 'red');

    // 2- Seleccionar todos los elementos <span> que están dentro de un <div> que, a su vez,
    // está dentro de un <p> y cambiar su color de fondo a amarillo.
    $(".parent").children("p").css("background", "yellow");

    // 3- Seleccionar el tercer elemento <li> en la lista y cambiar su texto a
    // "Nuevo Elemento".
    $(".tercero").find("li").eq(2).text("Nuevo Elemento");

    // 4- Seleccionar todas las cajas .box que tienen una lista <ul> y agregar una clase CSS
    // llamada "has-list" a esas cajas.
    $(".container2").find(".box").has("ul").addClass("has-list");

    // 5- Seleccionar todas las listas <ul> que están dentro de las cajas .box y agregarles una
    // clase CSS llamada "highlight".
    $("#container").find(".box").has("ul").addClass("highlight");

    // 6- Agregar un evento click a cada botón de manera que cuando se haga clic en un botón,
    // se muestre un mensaje en una alerta que diga "¡Hiciste clic en el Botón X!", donde X es 
    // el número del botón.
    $('#btn1').click(function(){
        alert("¡Hiciste clic en el Botón 1!");
    });
    $('#btn2').click(function(){
        alert("¡Hiciste clic en el Botón 2!");
    });
    $('#btn3').click(function(){
        alert("¡Hiciste clic en el Botón 3!");
    });

    // 7- Crea un formulario de registro con campos como nombre, correo electrónico y contraseña.
    // Utiliza eventos para validar los campos del formulario antes de permitir que el usuario 
    // lo envíe.
    
    // 8- Crea una lista desplegable (select) con opciones. Utiliza eventos para mostrar
    // información adicional sobre la opción seleccionada en DIV que esté al lado.
    
    // 9- Implementar dos select dependientes:
    // Al seleccionar el país se debe nmostrar tres ciudades relacionadas (no es necesario
    // consultar API aún)
});