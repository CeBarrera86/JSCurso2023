$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function (data) {
            var usuarioSelect = $('#usuarios');

            data.forEach(function (usuario) {
                usuarioSelect.append('<option value="' + usuario.id + '">' + usuario.name + '</option>');
            });
        },
        error: function (error) {
            console.error('Error al obtener países', error);
        }
    });

    $("#usuarios").change(function () {
        var idUsuario = $(this).val();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts?userId=' + idUsuario,
            method: 'GET',
            success: function (data) {
                var posteosSelect = $('#posteos');
                posteosSelect.empty();

                data.forEach(function (posteo) {
                    posteosSelect.append('<option value="' + posteo.id + '">' + posteo.title + '</option>');
                });
            },
            error: function (error) {
                console.error('Error al obtener países', error);
            }
        });
    });

});