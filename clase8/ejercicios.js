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
    $('#btn1').click(function () {
        alert("¡Hiciste clic en el Botón 1!");
    });
    $('#btn2').click(function () {
        alert("¡Hiciste clic en el Botón 2!");
    });
    $('#btn3').click(function () {
        alert("¡Hiciste clic en el Botón 3!");
    });

    // 7- Crea un formulario de registro con campos como nombre, correo electrónico y contraseña.
    // Utiliza eventos para validar los campos del formulario antes de permitir que el usuario 
    // lo envíe.
    $("#registroForm").submit(function (event) {
        event.preventDefault();

        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var password = $("#password").val();

        // Validación simple: campos no vacíos
        if (nombre === "" || email === "" || password === "") {
            $("#mensajeError").text("Todos los campos son obligatorios.");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        // Entre las validaciones se pueden ingresar sólo campo de texto para nombre
        // Combinación de letras, números, carácteres especiales como así también mínimo y
        // máximo en la longitud de la contraseña
        this.submit();
    });

    // 8- Crea una lista desplegable (select) con opciones. Utiliza eventos para mostrar
    // información adicional sobre la opción seleccionada en DIV que esté al lado.
    function mostrarInformacion(opcionSeleccionada) {
        var infoDiv = $("#info");

        // Puedes personalizar la información adicional para cada opción aquí
        var informacion = "";
        switch (opcionSeleccionada) {
            case "opcion1":
                informacion = "Esta es la Opción 1. Aquí tienes información sobre la opción 1.";
                break;
            case "opcion2":
                informacion = "La Opción 2 es otra elección. Aquí tienes detalles sobre la opción 2.";
                break;
            case "opcion3":
                informacion = "Opción 3 es la tercera elección. Aquí hay información sobre la opción 3.";
                break;
            default:
                informacion = "Información adicional aparecerá aquí.";
        }

        // Mostrar la información en el div
        infoDiv.text(informacion);
    }

    // Manejar el cambio de selección en la lista desplegable
    $("#ciudades").change(function () {
        var opcionSeleccionada = $(this).val();
        mostrarInformacion(opcionSeleccionada);
    });

    // Mostrar información inicial
    mostrarInformacion($("#ciudades").val());

    // 9- Implementar dos select dependientes:
    // Al seleccionar el país se debe nmostrar tres ciudades relacionadas (no es necesario
    // consultar API aún)
    // Definir un objeto que mapea países a ciudades
    var ciudadesPorPais = {
        "arg": ["Córdoba", "Buenos Aires", "General Pico"],
        "fra": ["París", "Marsella", "Lyon"],
        "cro": ["Zagreb", "Split", "Rijeka"]
    };

    // Función para cargar las ciudades en el segundo select
    function cargarCiudades(paisSeleccionado) {
        // Obtener el select de ciudades
        var selectCiudades = $("#ciudades");

        // Vaciar las opciones actuales
        selectCiudades.empty();

        // Obtener las ciudades correspondientes al país seleccionado
        var ciudades = ciudadesPorPais[paisSeleccionado];

        // Agregar las nuevas opciones al select de ciudades
        if (ciudades) {
            $.each(ciudades, function (index, ciudad) {
                selectCiudades.append("<option value='" + ciudad + "'>" + ciudad + "</option>");
            });
        }
    }

    // Agregar un evento change al select de países
    $("#paises").change(function () {
        // Obtener el país seleccionado
        var paisSeleccionado = $(this).val();

        // Cargar las ciudades correspondientes al país seleccionado
        cargarCiudades(paisSeleccionado);
    });

    // Cargar las ciudades iniciales (basado en el país seleccionado inicialmente)
    cargarCiudades($("#paises").val());
});