$(document).ready(function ($) {


    $('#CodigoSku').on('change', function () {
     
        $(form).submit();
    });
    $('#Marketplace').on('change', function () {

        $(form).submit();
    });

    if ($('#CodigoMarketplace').val() != undefined)
    {

        $("#Marketplace").val($('#CodigoMarketplace').val());
    }
    
    if ($('#Sku').val() != undefined)
    {
        $("#CodigoSku").val($('#Sku').val());
    }
    
    //Mascaras
    $("#hider").hide();
    $("#popup_box").hide();
    //Alteração de Preços
       
    //Link Buybox
    $('#btnBuyBox-MPV').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja+"&Sku="+Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    $('#btnBuyBox-Walmart').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
    });

    $('#btnBuyBox-ViaVarejo').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });
    $('#btnBuyBox-Carrefour').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });
    $('#btnBuyBox-Leroy').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });
    $('#btnBuyBox-Magalu').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    $('#btnBuyBox-MagaluMoveis').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    $('#btnBuyBox-Mercado71').click(function () {
       
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
    });

    $('#btnBuyBox-Mercado72').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
    });

    $('#btnBuyBox-Mercado73').click(function () {
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
    });
    $('#btnBuyBox-Mercado74').click(function () {
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
    });

    $('#btnBuyBox-Mercado81').click(function () {

       
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
        
    });

    $('#btnBuyBox-Zoom').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    $('#btnBuyBox-Amazon').click(function () {

        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    $('#btnBuyBox-Mercado82').click(function () {
        
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);
        
    });

    $('#btnBuyBox-Mercado83').click(function () {
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    $('#btnBuyBox-Mercado84').click(function () {
        var Loja = $(this).attr('alt');
        var Sku = $("#Sku").val();
        window.open("/Gestao/CadastroBuybox?Loja=" + Loja + "&Sku=" + Sku, "", "overflow:auto;,width=500,height=400,left=" + (screen.width - 200) / 2 + ",top=" + (screen.height - 600) / 2);

    });

    //Ajustes de Preços e Estoque
    $('#btnAlterarPrecoEstoque-CasaVideo').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() + "-" + IdMercadoLivre);

    });
    $('#btnAlterarPrecoEstoque-MPV').click(function () {
        
        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');        
        var PrecoTechshop = $("#Preco-" + Loja).val();        
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });
    
    $('#btnAlterarPrecoEstoque-ViaVarejo').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });
    $('#btnAlterarPrecoEstoque-Carrefour').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() + "-" + IdMercadoLivre);

    });
    $('#btnAlterarPrecoEstoque-Leroy').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        var PrecoOriginal = $("#PrecoOriginal-" + Loja).val();
        AtualizarPrecoLeroy(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() + "-" + IdMercadoLivre + "-" + PrecoOriginal);

    });

    $('#btnAlterarPrecoEstoque-Walmart').click(function () {
        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });

    $('#btnAlterarPrecoEstoque-Magalu').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });
    $('#btnAlterarPrecoEstoque-MagaluMoveis').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() + "-" + IdMercadoLivre);

    });

    $('#btnAlterarPrecoEstoque-Mercado71').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);
    });

    $('#btnAlterarPrecoEstoque-Mercado72').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);
    });

    $('#btnAlterarPrecoEstoque-Mercado73').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);
    });
    $('#btnAlterarPrecoEstoque-Mercado74').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() + "-" + IdMercadoLivre);
    });

    $('#btnAlterarPrecoEstoque-Mercado81').click(function () {

        var Loja = $(this).attr('alt');
        var IdMercadoLivre = $(this).attr('vocab');        
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });

    $('#btnAlterarPrecoEstoque-Zoom').click(function () {
        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });

    $('#btnAlterarPrecoEstoque-Amazon').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });

    $('#btnAlterarPrecoEstoque-Mercado82').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);

    });

    $('#btnAlterarPrecoEstoque-Mercado83').click(function () {
       
     var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
         AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() +"-"+ IdMercadoLivre);
    });

    $('#btnAlterarPrecoEstoque-Mercado84').click(function () {

        var IdMercadoLivre = $(this).attr('vocab');
        var Loja = $(this).attr('alt');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Estoque = $("#Estoque-" + Loja).val();
        AtualizarPrecoEstoque(PrecoTechshop + "-" + Estoque + "-" + Loja + "-" + $("#Sku").val() + "-" + IdMercadoLivre);
    });
    
     function AtualizarPrecoLeroy(Parametros) {

        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");

        $.getJSON('/Gestao/AtualizarPrecoLeroy/',
           {
               Parametro: Parametros,

           },
          function (json) {

              $.each(json, function (i, EmpData) {

               
                  if (EmpData.MensagemAjustePrecoEstoque.indexOf('Sucesso') > -1) {

                      $("#DivInner").html("<div class='alert alert-success' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + EmpData.MensagemAjustePrecoEstoque + "</div>");
                      $('#DivInner').show();
                      $('#DivVoltar').show();
                      window.scrollTo(0, 0);
                  }

                  else {

                      $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + EmpData.MensagemAjustePrecoEstoque + "</div>");
                      $('#DivInner').show();
                      $('#DivVoltar').show();
                      window.scrollTo(0, 0);

                  }
                  $("#hider").fadeOut("slow");
                  $('#popup_box').fadeOut("slow");
              })

          });

    }

    function AtualizarPrecoEstoque(Parametros) {

        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");

        $.getJSON('/Gestao/AtualizarPreco/',
           {
               Parametro: Parametros,

           },
          function (json) {

              $.each(json, function (i, EmpData) {

               
                  if (EmpData.MensagemAjustePrecoEstoque.indexOf('Sucesso') > -1) {

                      $("#DivInner").html("<div class='alert alert-success' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + EmpData.MensagemAjustePrecoEstoque + "</div>");
                      $('#DivInner').show();
                      $('#DivVoltar').show();
                      window.scrollTo(0, 0);
                  }

                  else {

                      $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + EmpData.MensagemAjustePrecoEstoque + "</div>");
                      $('#DivInner').show();
                      $('#DivVoltar').show();
                      window.scrollTo(0, 0);

                  }
                  $("#hider").fadeOut("slow");
                  $('#popup_box').fadeOut("slow");
              })

          });

    }
    
    //Simular Preço
    $('#btnPreco-MPV').click(function () {
                
        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });
    
    $('#btnPreco-ViaVarejo').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-Walmart').click(function () {
        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });
    $('#btnPreco-CasaVideo').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });
    $('#btnPreco-Magalu').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-MagaluMoveis').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-Mercado71').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);
    });

    $('#btnPreco-Mercado72').click(function () {

       var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);
    });

    $('#btnPreco-Mercado73').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);
    });

    $('#btnPreco-Mercado81').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-Zoom').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-Amazon').click(function () {

      var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-Mercado82').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);

    });

    $('#btnPreco-Mercado83').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        var Margem = $("#Margem-" + Loja).val();
        BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem);
    });
    

    function BuscarPreco(Loja, PrecoConcorrente, PrecoTechshop, Margem) {

        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");

        var Parametros = $("#Sku").val() + '-' + Loja + '-' + PrecoConcorrente + '-' + PrecoTechshop + '-' + Margem;
        $.getJSON('/Gestao/BuscarPreco/',
           {
               Parametro: Parametros,

           },
          function (json) {

              $.each(json, function (i, EmpData) {

                  $("#Margem-" + EmpData.Loja).val(EmpData.MargemAtual);
                  $("#Preco-" + EmpData.Loja).val(EmpData.PrecoVenda);
                  $("#hider").fadeOut("slow");
                  $('#popup_box').fadeOut("slow");
              })

          });

    }


    //Simulação Margem
    $('#btnPesquisar-MPV').click(function () {
        
        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Mercado71').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Mercado72').click(function () {


        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Mercado73').click(function () {


        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Mercado81').click(function () {

    
        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop,IdMercadoLivre);

    });

    $('#btnPesquisar-Mercado82').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Mercado83').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });
    $('#btnPesquisar-CasaVideo').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });
    $('#btnPesquisar-Magalu').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-MagaluMoveis').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Walmart').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-ViaVarejo').click(function () {
            
        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });

    $('#btnPesquisar-Zoom').click(function () {

        var Loja = $(this).attr('alt');
        var PrecoConcorrente = $(this).attr('lang');
        var IdMercadoLivre = $(this).attr('usemap');
        var PrecoTechshop = $("#Preco-" + Loja).val();
        BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre);

    });
    
    function BuscarMargem(Loja, PrecoConcorrente, PrecoTechshop, IdMercadoLivre) {
       
        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");

        var Parametros = $("#Sku").val() + '-' + Loja + '-' + PrecoConcorrente + '-' + PrecoTechshop + '-' + IdMercadoLivre;
        $.getJSON('/Gestao/Buscar/',
           {
               Parametro: Parametros,
              
           },
          function (json) {

              $.each(json, function (i, EmpData) {
                 
                  $("#Margem-" + EmpData.Loja).val(EmpData.MargemAtual);
                  $("#Preco-" + EmpData.Loja).val(EmpData.PrecoVenda);
                  $("#hider").fadeOut("slow");
                  $('#popup_box').fadeOut("slow");
               })
            
          });

    }
    

    $("#hider").hide();
    $("#popup_box").hide();
    $('#form').submit(function () {

        $('#popup_box').show();
        $('#hider').show();
        
        return true;

    });
    CarregaGridCategorias();
    TotalSku = 0;

    var today = new Date();
    var mm = today.getMonth(); 
    var yyyy = today.getFullYear();
    
    var datainicio = "01" + '/' + mm + '/' + yyyy;
 
    var DataInicio = today-30;
    $('#DataInicio').val(datainicio);
    $('#DataFim').val(today);


    if ($('#CodigoCategoria').val() != undefined) {

        CarregaGridSubCategorias($('#CodigoCategoria').val());

        TotalSku = $('#QuantidadeVariacoes').val();

    }

    if ($('#CodigoCategoria').val() != undefined) {

        $("#SelectStatus").val($('#StatusProduto').val());

    }


    $("#images img").on("click", function (e) {
      

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

            });
        }


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
        divVariacoes += "<div class='col-md-2'>";
        divVariacoes += "     <input id='Sku' placeholder='Sku' name='Sku" + TotalSku + "' value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes += " </div>";
        divVariacoes += " <div class='col-md-2'>";
        divVariacoes += "     <input id='Ean' placeholder='Ean' name='Ean" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' required='required'>";
        divVariacoes += " </div>";
        divVariacoes += " <div class='col-md-1'>";
        divVariacoes += "     <input id='Cor' placeholder='Cor' name='Cor" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes += " </div>";
        divVariacoes += " <div class='col-md-2'>";
        divVariacoes += "     <input id='Tamanho' placeholder='Tamanho'  name='Tamanho" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes += " </div>";
        divVariacoes += " <div class='col-md-2'>";
        divVariacoes += "     <input id='Voltagem'placeholder='Voltagem' name='Voltagem" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes += " </div>";
        divVariacoes += " <div class='col-md-2'>";
        divVariacoes += "     <input id='Estoque' placeholder='Estoque' name='qty" + TotalSku + "'  type='number' class='text-right form-control ng-pristine ng-valid ng-valid-number ng-valid-min ng-valid-required' min='0'>";
        divVariacoes += "   </div>";
        divVariacoes += " <div class='col-md-1'>";
        divVariacoes += "<button type='button' class='removeButton'>--</button>";
        divVariacoes += "     </div>";
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


        CarregaGridSubCategorias(this.value);


    });

    function CarregaGridSubCategorias(Codigo) {

        $('#SelectSubCategoria').empty();

        var selectSubCategoria = "";

        $.ajax({
            type: "GET",
            url: "/Produto/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.CodigoSubCategoria + "'>" + EmpData.DescricaoSubCategoria + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.CodigoSubCategoria + "'>" + EmpData.DescricaoSubCategoria + "</option>";

                    }

                })
                $('#SelectSubCategoria').append(selectSubCategoria);
            }
        });

    }

    function CarregaGridCategorias() {


        var selectCategoria = "";

        $.ajax({
            type: "GET",
            url: "/Produto/BuscarCategorias/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {


                    if (EmpData.CodigoCategoria == $('#CodigoCategoria').val()) {

                        selectCategoria = selectCategoria + "<option selected value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";
                    } else {

                        selectCategoria = selectCategoria + "<option value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";


                    }

                })
                $('#SelectCategoria').append(selectCategoria);
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
        $.getJSON('/Produto/Buscar/',
           {
               Nome: $('#Nome').val(),
               sku: $('#Sku').val(),
               QuantidadeMinima: $('#EstoqueDe').val(),
               QuantidadeMaxima: $('#EstoqueAte').val(),
               Status: $('#SelectStatus').val(),
               TotalPaginas: $('#SelectTotalPaginas').val(),
               PaginaAtual: $('#SelectNumeroPagina').val(),

           },
          function (json) {

              $("#TblEmpDet tbody").empty();
              $.each(json, function (i, EmpData) {

                  tr = $('<tr/>');
                  tr.append("<th>" + EmpData.sku + "</th>");
                  tr.append("<th>" + EmpData.name + "</th>");
                  if (EmpData.status == 'enabled') {
                      tr.append("<th style='text-align:center'>Ativo</th>");
                  } else {

                      tr.append("<th style='align-content:center'>Inativo</th>");
                  }
                  tr.append("<th>" + EmpData.qty + "</th>");
                  tr.append("<th>" + EmpData.price + "</th>");
                  tr.append("<th>" + "<a id='deletar' class='confirmation-callback' href=/Produto/Edit/" + EmpData.sku + ">Editar</a>" + "</th>");
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
        for (i = 1; i <= parseInt(TotalItens) ; i++) {

            $("#SelectNumeroPagina").append(new Option(i, i));
        }
        //Seta página atual
        $("#SelectNumeroPagina").val(PaginaAtual);


    };

    $('#btnPesquisar').click(function () {
        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });

    $('#PrimeiraPagina').click(function () {

        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });

    $('#PaginaAnterior').click(function () {
        var pagina = 0;

        if ($('#SelectNumeroPagina').val() != "1") {
            pagina = parseInt($('#SelectNumeroPagina').val()) - 1;
            $('#SelectNumeroPagina').val(pagina);
            AtualizaGrid();
        }


    });

    $('#ProximaPagina').click(function () {
        var TotalPaginas = $('#SelectNumeroPagina').children('option').length

        if (parseInt($('#SelectNumeroPagina').val()) < parseInt(TotalPaginas)) {
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


