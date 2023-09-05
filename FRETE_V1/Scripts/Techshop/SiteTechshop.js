$(document).ready(function ($) {


    $('#PrecoOriginal').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoPromocional').maskMoney({ thousands: '', decimal: '.' });

    // Setar data atual campos de data
    var now = new Date();
    var today = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    
    //alert(today);

    
    /* $('#DataInicio').val($('#DataInicio_').val())
        $('#DataFim').val($('#DataFim_').val())
    
    
    if ($('#DataInicio_').val() != "") {

             
        $('#SelectStatus').val($('#Status_').val());
        $('#SelectMarketplace').val($('#Marketplace').val());
    }*/

    $('#DataInicio').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });

    $('#DataFim').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });

    //$('#DataInicio').datepicker({ dateFormat: 'dd/mm/yyyy' }); // format to show
   // $('#DataInicio').datepicker('setDate', realDate);
    
   // $("#DataFim").datepicker("option", "dateFormat", "dd/mm/yy");

    //$('#DataFim').val(today).val()

    $('#SelectTransp').val($('#TransportadoraEdicao').val());



    $('#CheckTodos').change(function () {
        var checkboxes = $(this).closest('form').find(':checkbox');
        if ($(this).prop('checked')) {
            checkboxes.prop('checked', true);
        } else {
            checkboxes.prop('checked', false);
        }
    });
   
});    
    

