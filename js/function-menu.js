$(document).ready(function() {

    $('#open').click(function(e) {

        e.preventDefault()

        $('#conteudo').empty()

        $('#conteudo').load("calculadora/visao/calculadora.html")
    })
})