(function ($) {
   

    window.onload = function () {
      

        var elem = document.getElementById("#CorpoPergunta");
        elem.unselectable = "on";

        CarregarRespostaCorreta($('#RespostaCorreta').val());
        HabilitaDesabilitaBotaoAnterior(1);
        CarregaCheckRevisao($('#Revisao').val());
  
    }

    function HabilitaDesabilitaBotaoAnterior(Codigo) {

       if (Codigo == 1) {

            $('#btnAnterior').attr('disabled', 'disabled');
        } else {

            $('#btnAnterior').removeAttr('disabled');
        }
    }

    function HabilitaDesabilitaBotaoPosterior(Codigo,TotalPerguntas) {

        if (Codigo == TotalPerguntas) {

            $('#btnProximo').attr('disabled', 'disabled');
        } else {

            $('#btnProximo').removeAttr('disabled');
        }
    }
    
    function LimparDivResposta() {
        $("#DivMensagemSucesso").empty();
        $("#DivMensagemSucesso").hide();
    }

    $("#target").click(function () {
        $("#DivMensagemSucesso").append("Resposta Correta letra " + $("#Resposta").val() + "<br>" + $("#Justificativa").val());
        $("#DivMensagemSucesso").show();
    });

    $("#btnAnterior").click(function () {
        LimparDivResposta();
        $('#btnAnterior').attr('disabled', 'disabled');
        BuscarAnterior();
   
    });

    $("#btnProximo").click(function () {
        LimparDivResposta();
        $('#btnProximo').attr('disabled', 'disabled');
        BuscarProximo();
        
    });

    $("#btnFinalizar").click(function () {

        Finalizar();

    });

    function Finalizar() {


        $.getJSON('/Prova/Finalizar/',
           {
               CodigoMenu: $("#CodigoMenu").val(),
               TotalPerguntas: $("#TotalPerguntas").val(),
               PerguntaAtual: $("#PerguntaAtual").val(),
               PerguntaControle: $("#PerguntaControle").val(),
               CodigoTentativa: $("#CodigoTentativa").val(),
               Revisar: RetornaValorQuestaoRevisar(),
               Resposta: RetornaLetraCorreta(),

           },
          function (json) {
              $.each(json, function (i, EmpData) {

                
                  window.location.replace("../gabarito/?CodigoMenu=" + EmpData.CodigoMenu + "&CodigoTentativa=" + EmpData.CodigoTentativa);


              })


          });


    }

    function CarregarRespostaCorreta(RespostaCorreta) {
        
       
        $('input:radio[name=Resposta]').each(function () {
            $(this).attr('checked', false);
            
      });
        
        $('input:radio[name=Resposta]').each(function () {

            if ($(this).val() == RespostaCorreta) {
                $(this).attr('checked', true);
            }
        });
        
    }

    function RetornaValorQuestaoRevisar() {
        var checado=0;
        if ($("#Revisao").is(':checked')) {

            checado = 1;
        }
        return checado;
     }

    function CarregaCheckRevisao(Codigo) {
        if (Codigo == 1) {
            $("#Revisao").prop("checked", true);
        } else {

            $("#Revisao").prop("checked", false);
        }
    }

    function BuscarProximo() {
        
      
        $.getJSON('/Prova/Proxima/',
           {
               CodigoMenu: $("#CodigoMenu").val(),
               TotalPerguntas: $("#TotalPerguntas").val(),
               PerguntaAtual: $("#PerguntaAtual").val(),
               PerguntaControle: $("#PerguntaControle").val(),
               CodigoTentativa: $("#CodigoTentativa").val(),
               Revisar: RetornaValorQuestaoRevisar(),
               Resposta: RetornaLetraCorreta(),
              
           },
          function (json) {
              $.each(json, function (i, EmpData) {
               
                  $('#Pergunta').html(EmpData.DescricaoPergunta);
                  $('#PerguntaAtualDisplay').html(EmpData.PerguntaAtual);
                  $('#Resposta1').html(EmpData.DescricaoResposta1);
                  $('#Resposta2').html(EmpData.DescricaoResposta2);
                  $('#Resposta3').html(EmpData.DescricaoResposta3);
                  $('#Resposta4').html(EmpData.DescricaoResposta4);
                  $('#PerguntaControle').val(EmpData.PerguntaControle);
                  $('#CodigoTentativa').val(EmpData.CodigoTentativa);
                  $('#TotalPerguntas').val(EmpData.TotalPerguntas);
                  $('#PerguntaAtual').val(EmpData.PerguntaAtual);
                  $("#Resposta").val(EmpData.DescricaoResposta);
                  $("#Justificativa").val(EmpData.DescricaoJustificativa);

                  $('#btnProximo').removeAttr('disabled');

                  CarregarRespostaCorreta(EmpData.RespostaCorreta);
                  CarregaCheckRevisao(EmpData.Revisar);
                  HabilitaDesabilitaBotaoAnterior(EmpData.PerguntaAtual);
                  HabilitaDesabilitaBotaoPosterior(EmpData.PerguntaAtual, EmpData.TotalPerguntas);

              })
                   

          });


    }
    
    function RetornaLetraCorreta() {

        var valor = "";
        $('input:radio[name=Resposta]').each(function () {

            if ($(this).is(':checked'))
                valor = $(this).val();
        })
        return valor;
    }

    function BuscarAnterior() {
        
      
       $.getJSON('/Prova/Anterior/',
           {
               CodigoMenu: $("#CodigoMenu").val(),
               TotalPerguntas: $("#TotalPerguntas").val(),
               PerguntaAtual: $("#PerguntaAtual").val(),
               PerguntaControle: $("#PerguntaControle").val(),
               CodigoTentativa: $("#CodigoTentativa").val(),
               Revisar: RetornaValorQuestaoRevisar(),
               Resposta: RetornaLetraCorreta(),
              
           },
          function (json) {
              $.each(json, function (i, EmpData) {
                  
                  $('#Pergunta').html(EmpData.DescricaoPergunta);
                  $('#PerguntaAtualDisplay').html(EmpData.PerguntaAtual);
                  $('#Resposta1').html(EmpData.DescricaoResposta1);
                  $('#Resposta2').html(EmpData.DescricaoResposta2);
                  $('#Resposta3').html(EmpData.DescricaoResposta3);
                  $('#Resposta4').html(EmpData.DescricaoResposta4);
                  $('#PerguntaControle').val(EmpData.PerguntaControle);
                  $('#CodigoTentativa').val(EmpData.CodigoTentativa);
                  $('#TotalPerguntas').val(EmpData.TotalPerguntas);
                  $('#PerguntaAtual').val(EmpData.PerguntaAtual);
                  $("#Resposta").val(EmpData.DescricaoResposta);
                  $("#Justificativa").val(EmpData.DescricaoJustificativa);
                  

                  $('#btnAnterior').removeAttr('disabled');
                  CarregarRespostaCorreta(EmpData.RespostaCorreta);
                  CarregaCheckRevisao(EmpData.Revisar);
                  HabilitaDesabilitaBotaoAnterior(EmpData.PerguntaAtual);
                  HabilitaDesabilitaBotaoPosterior(EmpData.PerguntaAtual, EmpData.TotalPerguntas);
              })          
               


          });


    }


}(jQuery));