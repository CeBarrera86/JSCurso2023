$(document).ready(function () {
    //oculto provincias
    $(".provincias").hide();
    //cargo los paises en el select pais
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        method: 'GET',
        success: function (data) {
            var paisesSelect = $('#pais');

            data.forEach(function (pais) {
                paisesSelect.append('<option value="' + pais.name.common + '">' + pais.name.common + '</option>');
            });
        },
        error: function (error) {
            console.error('Error al obtener países', error);
        }
    });

    function mostrarProvincias() {

        $.ajax({
            url: 'https://apis.datos.gob.ar/georef/api/provincias',
            method: 'GET',
            success: function (data) {
                var provinciasSelect = $('#provinciaSelect');
                let provincias = data.provincias;

                provincias.forEach(function (provincia) {
                    provinciasSelect.append('<option value="' + provincia.nombre + '">' + provincia.nombre + '</option>');
                });
                $(".provincias").show();
            },
            error: function (error) {
                console.error('Error al obtener países', error);
            }
        });
    }

    //si selecciono el pais Argentina, que me muestre las provincias
    $("#pais").change(function () {
        let paisSeleccionado = $(this).val();
        if (paisSeleccionado == 'Argentina') {
            mostrarProvincias();
        } else {
            $(".provincias").hide();
        }
    });

});
