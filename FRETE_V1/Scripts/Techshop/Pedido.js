$(document).ready(function () {
   


    if ($('#TransportadoraRetorno').val() != undefined) {

        $("#Tranportadoras").val($('#TransportadoraRetorno').val());

    }

    if ($('#MarketplaceRetorno').val() != undefined) {

        $("#ListaMarketplace").val($('#MarketplaceRetorno').val());

    }

    if ($('#StatusLote').val() != undefined) {

        $("#Status").val($('#StatusLote').val());
      
    }
     

    $("#btn-show-modal").click(function () {
        $.ajax({
            cache: false,
            url: '/Controller/ActionToLoadPartial',
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            dataType: 'html',
            data: { param: yourParamToKnowWhatToLoad }
        }).success(function (data) {
            $("#modal-window .modal-body").html(data);
            $("#modal-window").modal("show");
        }).error(function () {
            // Do something with the error
        });
    });


    var i = 0;

    $("#SelectMesCalendario").val($('#Mes').val());
    

    if ($('#StatusSac').val() != "") {
        $("#StatusSacId").val($('#StatusSac').val());
    }

    $('#SelectMesCalendario').on('change', function () {

        $("#form").submit();

    });

  //  StatusDataPrometida

    $('#AdicionarComposicao').click(function () {
      
        
        var Composicao="";
        Composicao = Composicao + "<div class='form-group' id='ComposicaoId'>";
        Composicao= Composicao+"<label class='col-sm-2 control-label'><span class='required'>*</span><strong>Sku Techshop:</strong> </label>";
        Composicao= Composicao+"<div class='col-sm-2'>";
        Composicao = Composicao + "<input type='text' id='SkuTechshop' value='"+i+"' required name='SkuTechshop"+i+"' class='form-control' maxlength='50'>";
        Composicao = Composicao + "</div>";
        Composicao = Composicao + "<label class='col-sm-2 control-label'><span class='required'>*</span><strong>Percentual Composição:</strong> </label>";
        Composicao = Composicao + "<div class='col-sm-1'>";
        Composicao = Composicao + "<input type='text' id='PercentualProduto' value='' required name='PercentualProduto"+i+"' class='form-control' maxlength='50'>";
        Composicao = Composicao + "</div>";
        Composicao = Composicao + "<div class='col-sm-1'>";
        Composicao = Composicao + "<a class='remove_block' href='#'>Remove</a></div>";                   
        Composicao = Composicao + "</div>";
        
        Composicao = Composicao + "</div>";
        $('#ConteudoComposicao').append(Composicao);
        i = i + 1;
        $('#TotalComposicoes').val(i);
        
      });

    $(document).on('click', '.remove_block', function (events) {
        $(this).parents('div').eq(1).remove();
    });

    $("#SelectEstado").val($('#Estado').val());

    $("#Marketplace").val($('#ValorMArketplace').val());

    $("#Filial").val($('#ValorFilial').val());

    $("#Transportadora").val($('#ValorTransportadora').val());


    $("#hider").hide();

    $("#popup_box").hide();

    $('#form').submit(function () {

        $('#popup_box').show();
        $('#hider').show();

        return true;
        $('#popup_box').show();
        $('#popup_box').show();

    });
        
    var now = new Date();

    var today = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    
    $('#DataInicio').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });

    $('#DataFim').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });

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
    

