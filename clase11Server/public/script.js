$(document).ready(function () {
    $('#login-form').submit(function (event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/login',
            data: JSON.stringify({ username, password }),
            contentType: 'application/json',
            success: function (data) {
                console.log('Solicitud POST enviada con éxito');
            },
            error: function (error) {
                console.error('Error al enviar la solicitud POST:', error);
            }
        });
    });
});