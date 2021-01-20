$(document).ready(function () {
    // Add handlers
    $('#emailCheckBtn').on('click', function () {
        trySendEmail()
    });


});

function trySendEmail() {
    var email = $('#emailInput').val();
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://localhost:65347/core/begin/email?email=' + email,
        success: function (data) {
            alert(data.Email)
        },
        error: function () {
            alert('Oof ')
        }
    });
}

// http://localhost:65347/