$(document).ready(function() {

    var display = ''

    $('.btn').click(function(e) {

        e.preventDefault()

        let number = $(this).attr('id')

        display += number

        $('#display').val(display)

        // var value = `valor=${$(this).attr('id')}`

        // $.ajax({
        //     type: 'POST',
        //     dataType: 'JSON',
        //     assync: true,
        //     data: value,
        //     url: 'calculadora/modelo/calculadora.php',
        //     success: function(dados) {

        //     }
        // })
    })

})