$(document).ready(function ($) {
    //Mascaras
    
    $('#Preco').maskMoney({ thousands: '', decimal: '.' });
    $('#Peso').maskMoney({ thousands: '', decimal: '.' });
    $('#Comprimento').maskMoney({ thousands: '', decimal: '.' });
    $('#Largura').maskMoney({ thousands: '', decimal: '.' });
    $('#Altura').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoDeML').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoPorML').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoPromocional').maskMoney({ thousands: '', decimal: '.' });
    
    CarregaGridCategorias();
    TotalSku = 0;
    

    $('#CheckManterCategoria').click(function () {

        $("#RemoverCategoria").show();
        $("#AdicionarCategorias").hide();

    });

    $('#CheckCategoria').click(function () {

        $("#RemoverCategoria").hide();
        $("#AdicionarCategorias").show();
        
    });

    if($('#CodigoCategoria').val()!=undefined){

        CarregaGridSubCategorias($('#CodigoCategoria').val());

        TotalSku = $('#QuantidadeVariacoes').val();

    } 
 
    if ($('#CodigoCategoria').val() != undefined) {

        $("#SelectStatus").val($('#StatusProduto').val());

    }
    
    $("#hider").hide();

    $("#popup_box").hide();     

    $("#images img").on("click", function (e) {
        alert("your function all")

    });

    $('#Variacao').click(function () {
        /*TotalSku = TotalSku + 1;
        alert("#Descricao" + $(this).prop('title'));

        $("#Descricao" + $(this).prop('title')).remove();
        $("#Variacao" + $(this).prop('title')).remove();
        $("#DivImagem" + $(this).prop('title')).remove();*/
     
    });

    
    remove = function (item) {

        
        var tr = $(item).closest('tr');

        if (tr.attr('id') != "Linha1") {
            TotalSku = TotalSku - 1;

           tr.fadeOut(400, function () {
               tr.remove();

               $("#Descricao" + tr.attr('id')).remove();

        });}


        return false;
    }
  
    $(document).on('click', '.removeButton', function () {

        $('#Variacoes' + TotalSku).remove();
        $('#DivImagem' + TotalSku).remove();
        $('#Cabecalho' + TotalSku).remove();        
  
    });

    $('#AdicionarSku').click(function () {

        TotalSku = parseInt(TotalSku) + 1;
     
    
        var divVariacoes = "";
        var divImagem = "";
        divVariacoes += "  <div class='form-group' id='Cabecalho" + TotalSku + "'><label class='col-sm-2 control-label'>Variação" + TotalSku + " </label></div>";
        divVariacoes += "<div class='rows' id='Variacoes" + TotalSku + "'>";
        divVariacoes+="<div class='col-md-2'>";
        divVariacoes += "     <input id='Sku' placeholder='Sku' name='Sku" + TotalSku + "' value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Ean' placeholder='Ean' name='Ean" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' required='required'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-1'>";
        divVariacoes += "     <input id='Cor' placeholder='Cor' name='Cor" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Tamanho' placeholder='Tamanho'  name='Tamanho" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Voltagem'placeholder='Voltagem' name='Voltagem" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Estoque' placeholder='Estoque' name='qty" + TotalSku + "'  type='number' class='text-right form-control ng-pristine ng-valid ng-valid-number ng-valid-min ng-valid-required' min='0'>";
        divVariacoes+="   </div>";
        divVariacoes+=" <div class='col-md-1'>";
        divVariacoes += "<button type='button' class='removeButton'>--</button>";
        divVariacoes+="     </div>";
        divVariacoes += " </div>";        
        divImagem += "<div id='DivImagem" + TotalSku + "'>";
        divImagem += "    <div class='rows'>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              *Foto 1";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              Foto 2";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              Foto 3";              
        divImagem += "         </div> ";
        divImagem += "    </div>";
        divImagem += "    <div class='rows'>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "             <input type='text' name='ImagemVariacaoFoto1" + TotalSku + "' class='form-control' required placeholder='http://www.site.com.br/imagem.jpg'>";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              <input type='text' name='ImagemVariacaoFoto2" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              <input type='text' name='ImagemVariacaoFoto3" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
        divImagem += "          </div>";
        divImagem += "      </div>";
        divImagem += "    <div class='rows'>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "             Foto 4";
        divImagem += "         </div>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "             Foto 5";
        divImagem += "         </div>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "              Foto 6";
        divImagem += "         </div>";
        divImagem += "     </div>  ";
         divImagem += "   <div class='rows'>";
         divImagem += "         <div class='col-md-4'>";
         divImagem += "             <input type='text' name='ImagemVariacaoFoto4" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
         divImagem += "         </div>";
         divImagem += "         <div class='col-md-4'>";
         divImagem += "            <input type='text' name='ImagemVariacaoFoto5" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
         divImagem += "         </div>";
         divImagem += "         <div class='col-md-4'>";
         divImagem += "             <input type='text' name='ImagemVariacaoFoto6" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
         divImagem += "         </div>";
         divImagem += "     </div>  ";
         divImagem += "</div>";
         
        $("#DemaisVariacoes").append(divVariacoes);
        $("#DemaisVariacoes").append(divImagem);

    });
    
    $('#RemoverSku').click(function () {

        alert('Remover Sku');

    });
    
    $('#SelectCategoria').change(function () {

        $('#SelectSubCategoria').empty();
        $('#SelectSubCategoriFinal').empty();
        $('#SelectSubCategoriFinal2').empty();
        $('#SelectSubCategoriFinal3').empty();
        $('#SelectSubCategoriFinal4').empty();
        $('#SelectSubCategoriFinal5').empty();
        

        CarregaGridSubCategorias(this.value);


    });

    $('#SelectSubCategoria').change(function () {

        $('#SelectSubCategoriFinal').empty();
        $('#SelectSubCategoriFinal2').empty();
        $('#SelectSubCategoriFinal3').empty();
        $('#SelectSubCategoriFinal4').empty();
        $('#SelectSubCategoriFinal5').empty();
        CarregaGridSubCategoriasFinal(this.value);


    });

    $('#SelectSubCategoriFinal').change(function () {


        $('#SelectSubCategoriFinal2').empty();
        $('#SelectSubCategoriFinal3').empty();
        $('#SelectSubCategoriFinal4').empty();
        $('#SelectSubCategoriFinal5').empty();
        CarregaGridSubCategoriasFinal2(this.value);

    });
     $('#SelectSubCategoriFinal2').change(function () {

   
         $('#SelectSubCategoriFinal3').empty();
         $('#SelectSubCategoriFinal4').empty();
         $('#SelectSubCategoriFinal5').empty();
        CarregaGridSubCategoriasFinal3(this.value);
        
    });
    $('#SelectSubCategoriFinal3').change(function () {

       
        $('#SelectSubCategoriFinal4').empty();
        $('#SelectSubCategoriFinal5').empty();
        CarregaGridSubCategoriasFinal4(this.value);
        
    });
    $('#SelectSubCategoriFinal4').change(function () {


        $('#SelectSubCategoriFinal5').empty();
        CarregaGridSubCategoriasFinal5(this.value);

    });    
    $('#SelectSubCategoriFinal5').change(function () {

        CarregaGridSubCategoriasFinal5(this.value);

    });
  

    //Primeiro Nível de Categorias
    function CarregaGridCategorias() {

        var selectCategoria = "";
        var CategoriaAtende = "";
        $("#DivCategoriaAtendida").html("");

        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarCategorias/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {


                    if (EmpData.CodigoCategoria == $('#CodigoCategoria').val()) {

                        selectCategoria = selectCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {

                        selectCategoria = selectCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }

                })
                $('#SelectCategoria').append(selectCategoria);
            }
        });

    }

    //Segundo Nível de Categorias
    function CarregaGridSubCategorias(Codigo) {

        $('#SelectSubCategoria').empty();
        $('#SelectSubCategoriFinal').empty();
        var CategoriaAtende = "";
        $("#DivCategoriaAtendida").html("");

        var selectSubCategoria = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }

                    if (EmpData.total_items_in_this_category == "1")
                    {

                        CategoriaAtende = "<span style='color:darkseagreen;font-size:14px;'>Categoria Atende me2.</span>";
                    } else {
                        CategoriaAtende = "<span style='color:red;font-size:10px;'>Categoria Não Atende me2, verificar se o produto pode ser enviado pelos correios!</span>";
                    }
                    
                })

                $("#DivCategoriaAtendida").html(CategoriaAtende);
                $('#SelectSubCategoria').append(selectSubCategoria);
            }
        });

    }
    
    //Terceiro nível
    function CarregaGridSubCategoriasFinal(Codigo) {
        
        $('#SelectSubCategoriFinal').empty();

        var selectSubCategoria = "";
        var CategoriaAtende = "";
        $("#DivCategoriaAtendida").html("");
        var CategoriaFinal = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }
                    if (EmpData.total_items_in_this_category == "1") {

                        CategoriaAtende = "<span style='color:darkseagreen;font-size:14px;'>Categoria Atende me2</span>";
                    } else {
                        CategoriaAtende = "<span style='color:red;font-size:10px;'>Categoria Não Atende me2, verificar se o produto pode ser enviado pelos correios!</span>";
                    }
                    CategoriaFinal = EmpData.name;
                })
              
                $("#DivCategoriaAtendida").html(CategoriaAtende);

                if (CategoriaFinal != "Sim") {
                    $('#SelectSubCategoriFinal').append(selectSubCategoria);
                }
             
                
            }
        });

    }

    //Quarto Nível
    function CarregaGridSubCategoriasFinal2(Codigo) {
              
        $('#SelectSubCategoriFinal2').empty();

        var selectSubCategoria = "";
        var CategoriaAtende = "";
        var CategoriaFinal = "";

        $("#DivCategoriaAtendida").html("");
        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }
                    
                    if (EmpData.total_items_in_this_category == "1")
                    {

                        CategoriaAtende = "<span style='color:darkseagreen;font-size:14px;'>Categoria Atende me2.</span>";
                    } else {
                        CategoriaAtende = "<span style='color:red;font-size:10px;'>Categoria Não Atende me2, verificar se o produto pode ser enviado pelos correios!</span>";
                    }
                    CategoriaFinal = EmpData.name;
                })
                
                $("#DivCategoriaAtendida").html(CategoriaAtende);
           
                if (CategoriaFinal != "Sim") {
                    $('#SelectSubCategoriFinal2').append(selectSubCategoria);
                }
            }
        });

    }
    
    //Quinto Nível 
    function CarregaGridSubCategoriasFinal3(Codigo) {

        
        var selectSubCategoria = "";
        var CategoriaAtende = "";
        var CategoriaFinal="";
        $("#DivCategoriaAtendida").html("");

        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }
                    if (EmpData.total_items_in_this_category == "1") {

                        CategoriaAtende = "<span style='color:darkseagreen;font-size:14px;'>Categoria Atende me2.</span>";
                    }
                    else 
                    {
                        CategoriaAtende = "<span style='color:red;font-size:10px;'>Categoria Não Atende me2, verificar se o produto pode ser enviado pelos correios!</span>";
                    }
                   
                    CategoriaFinal = EmpData.name;
                    
                })
                                
                $("#DivCategoriaAtendida").html(CategoriaAtende);

                if (CategoriaFinal != "Sim")
                {
                    $('#SelectSubCategoriFinal3').append(selectSubCategoria);
                }
            }
        });

    }
    
    //Sexto Nível
    function CarregaGridSubCategoriasFinal4(Codigo) {

   
        $('#SelectSubCategoriFinal4').empty();

        var selectSubCategoria = "";
        var CategoriaAtende = "";
        var CategoriaFinal = "";
        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }

                    if (EmpData.total_items_in_this_category == "1") {

                        CategoriaAtende = "<span style='color:darkseagreen;font-size:14px;'>Categoria Atende me2.</span>";
                    } else {
                        CategoriaAtende = "<span style='color:red;font-size:10px;'>Categoria Não Atende me2, verificar se o produto pode ser enviado pelos correios!</span>";
                    }
                    CategoriaFinal = EmpData.name;
                })
              
                if (CategoriaFinal != "Sim") {
                    $('#SelectSubCategoriFinal4').append(selectSubCategoria);
                }

                $("#DivCategoriaAtendida").html(CategoriaAtende);

            }
        });

    }

    //Sexto Nível
    function CarregaGridSubCategoriasFinal5(Codigo) {


       // $('#SelectSubCategoriFinal5').empty();

        var selectSubCategoria = "";
        var CategoriaAtende = "";
        var CategoriaFinal = "";
        $.ajax({
            type: "GET",
            url: "/ProdutoMeli/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.id + "'>" + EmpData.name + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.id + "'>" + EmpData.name + "</option>";

                    }

                    if (EmpData.total_items_in_this_category == "1") {

                        CategoriaAtende = "<span style='color:darkseagreen;font-size:14px;'>Categoria Atende me2.</span>";
                    } else {
                        CategoriaAtende = "<span style='color:red;font-size:10px;'>Categoria Não Atende me2, verificar se o produto pode ser enviado pelos correios!</span>";
                    }
                    CategoriaFinal = EmpData.name;
                })

                if (CategoriaFinal != "Sim") {
                    $('#SelectSubCategoriFinal5').append(selectSubCategoria);
                }

                $("#DivCategoriaAtendida").html(CategoriaAtende);

            }
        });

    }
    
    function AtualizaGrid() {
        var TotalItensPagina = "";
        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");
        var TotalItensPagina = "";
        var PaginaAtual = $('#SelectNumeroPagina').val();


        
        var tr;
        $.getJSON('/ProdutoMeliDirCvc/Buscar/',
           {
               
               sku: $('#Sku').val()
               
           },
          function (json) {

              $("#TblEmpDet tbody").empty();
              $.each(json, function (i, EmpData) {

                  tr = $('<tr/>');
                  tr.append("<th>" + EmpData.id + "</th>");
                  tr.append("<th>" + EmpData.permalink + "</th>");
                  tr.append("<th>" + EmpData.title + "</th>");
                  tr.append("<th>" + EmpData.condition + "</th>");
                  tr.append("<th width='40px'><input type='text' id='Estoque' class='form-control' value='" + EmpData.available_quantity + "' name='Estoque-" + EmpData.id + "' maxlength='70'></th>");
                  tr.append("<th width='100px'><input type='text' id='Preco' class='form-control' value='" + parseFloat(EmpData.price).toFixed(2) + "' name='Preco-" + EmpData.id + "' maxlength='70'></th>");
                  tr.append("<th>" + "<a id='deletar' class='confirmation-callback' href=/ProdutoMeli/Edit/" + EmpData.id + ">Editar</a>" + "</th>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');
                  $('#TblEmpDet').append(tr);
                  $('#TotalPaginas').text(EmpData.TotalBusca);

                  if (TotalItensPagina == "") {
                      CarregaItensPagina(EmpData.TotalItensPagina, PaginaAtual);
                  }
                  TotalItensPagina = EmpData.TotalBusca;
              })
              $("#hider").fadeOut("slow");
              $('#popup_box').fadeOut("slow");
          });

    }

    function CarregaItensPagina(TotalItens, PaginaAtual) {
       
        $("#SelectNumeroPagina").empty();
        //Clear select
        for(i=1;i<=parseInt(TotalItens);i++){

            $("#SelectNumeroPagina").append(new Option(i,i));
        }
        //Seta página atual
        $("#SelectNumeroPagina").val(PaginaAtual);

        
    };
    
    $('#btnPesquisar').click(function ()    {
        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });

    $('#teste').click(function () {
        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });
       
    $('#PrimeiraPagina').click(function () {

        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });
    
    $('#PaginaAnterior').click(function () {
        var pagina=0;

        if ($('#SelectNumeroPagina').val() != "1") {
            pagina = parseInt($('#SelectNumeroPagina').val()) - 1;
            $('#SelectNumeroPagina').val(pagina);
            AtualizaGrid();
        }
        

    });

    $('#ProximaPagina').click(function () {
        var TotalPaginas = $('#SelectNumeroPagina').children('option').length
        
        if (parseInt($('#SelectNumeroPagina').val()) < parseInt(TotalPaginas))
        {
            pagina = parseInt($('#SelectNumeroPagina').val()) + 1;
            $('#SelectNumeroPagina').val(pagina);
            AtualizaGrid();
        }
        

    });

    $('#UltimaPagina').click(function () {

        var TotalPaginas = $('#SelectNumeroPagina').children('option').length;
        $('#SelectNumeroPagina').val(TotalPaginas);
        AtualizaGrid();

    });
        
    $('#SelectTotalPaginas').on('change', function () {
        $("#SelectNumeroPagina").val('1');
        AtualizaGrid();
        // alert(this.value);
    });
      
    $('#SelectNumeroPagina').on('change', function () {

        AtualizaGrid();
        // alert(this.value);
    })

     

});    
    

