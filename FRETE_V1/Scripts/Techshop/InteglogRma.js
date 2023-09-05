$(document).ready(function ($) {

  
    if ($('#IdStatusPedidosMagalu').val() != undefined) {

        $("#StatusPedidosMagalu").val($('#IdStatusPedidosMagalu').val());
    }
     if ($('#IdTipoDefeito').val() != undefined) {

        $("#TipoDefeito").val($('#IdTipoDefeito').val());
    }
    
     if ($('#IdPrazoResposta').val() != undefined) {

         $("#PrazoResposta").val($('#IdPrazoResposta').val());
    }   

    if ($('#CodigoFilial').val() != undefined){

        $("#Filial").val($('#CodigoFilial').val());
    }

    if ($('#IdEstadoFisico').val() != undefined) {

        $("#EstadoFisico").val($('#IdEstadoFisico').val());
    }

    if ($('#IdStatusProduto').val() != undefined) {

        $("#StatusProduto").val($('#IdStatusProduto').val());
    }   

    if ($('#IdDirecionamento').val() != undefined) {

        $("#Direcionamento").val($('#IdDirecionamento').val());
    }
    
    if ($('#IdStatusFinal').val() != undefined) {

        $("#StatusFinal").val($('#IdStatusFinal').val());
    }

    $("#checkTodos").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    });
});