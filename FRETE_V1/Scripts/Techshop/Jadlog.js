$(document).ready(function () {

        

$('#form').submit(function () {

   

    if ($('input:checkbox:checked').length == 0) {

        $('#DivMensagemSucesso').append("Favor selecionar o pedido");
        $('#DivMensagemSucesso').show();        
        

        return false;
             

    } else {

        return true;

    } 

});

$('#CheckTodos').change(function () {
    var checkboxes = $(this).closest('form').find(':checkbox');
    if ($(this).prop('checked')) {
        checkboxes.prop('checked', true);
    } else {
        checkboxes.prop('checked', false);
    }
});

   
});    
    

