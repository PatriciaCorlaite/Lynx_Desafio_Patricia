$(document).ready(function ($) {


    $("#txtQuantidadePerguntas").keypress(verificaNumero);
    $("#txtQuantidadeMinutos").keypress(verificaNumero);
    $("#txtPercentualAprovacao").keypress(verificaNumero);

  
    function verificaNumero(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    }
    
    $("#btnUpdate").click(function () {
              var Exame = {
                DescricaoExame: $("#txtDescricaoExame").val(),
                DescricaoPercentualAcerto: $('#txtPercentualAprovacao').val(),
                QuantidadePerguntas: $('#txtQuantidadePerguntas').val(),
                QuantidadeTempo: $('#txtQuantidadeMinutos').val(),
                CodigoExame: $('#txtCodigoExame').val()
        };
              if (Validate()) {
                  $.ajax({
                      type: "POST",
                      URL: "/Exame/Edit",
                      dataType: "json",
                      contentType: "application/json",
                      data: JSON.stringify({ objExame: Exame }),
                      error: function (response) {
                          alert(response.responseText);
                      },
                      success: function (response) {
                          $("#DivInner").html("<div class='alert alert-primary' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                          $('#DivInner').show();
                          $('#DivVoltar').show();
                          
                      }
                  });
              }
    });

    $('#btnPesquisar').click(function () {

        Buscar();
    });

   $(document).on('click', '.deleteItem', function () {
      
        var id = $(this).data('id');
        $('#item-to-delete').val(id);
        
    });

    $('#btnContinueDelete').click(function() {
        var id = $('#item-to-delete').val();

        var DeleteUrl = "/Exame/Delete/"+id;

         $.ajax({
             url: DeleteUrl,
             dataType: "json",
             async: false,
             type: "POST",
             contentType: "application/json",
             error: function (response) {
                
             },
             success: function (response) {
                 if (response.indexOf('Erro') >= 0) {
                     $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                     $('#DivInner').show();
                     $('#DivVoltar').show();
                     FecharMensagemExclusao();
                 }
                 if (response.indexOf('Aten') >= 0) {
                    
                     $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                     $('#DivInner').show();
                     $('#DivVoltar').show();
                     $('html,body').scrollTop(10);
                     FecharMensagemExclusao();
                 }
                 else {
                   /*  $("#DivInner").html("<div class='alert alert-success' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                     $('#DivInner').show();
                     $('#DivVoltar').show();
                     $('html,body').scrollTop(10);
                     FecharMensagemExclusao();*/
           
                 };
                // alert(response);
             }
         });
         Buscar();
    });                           
    
    function Buscar() {
        $('#TblEmpDet tbody').remove();

     var tr;
        $.getJSON('/Exame/RetornaExamesBusca/',
           {
               
               DescricaoExame: $('#txtDescricaoExame').val()
           },
          function (json) {

              $.each(json, function (i, EmpData) {
                  var Empid = EmpData.COD_EXAME;
                  tr = $('<tr/>');
                  tr.append("<td class='COD_EXAME'>" + EmpData.COD_EXAME + "</td>");
                  tr.append("<td>" + EmpData.DSC_EXAME + "</td>");
                  tr.append("<td>" + EmpData.DSC_PERCENTUAL_ACERTO + "</td>");
                  tr.append("<td>" + EmpData.QTDE_TEMPO + "</td>");
                  tr.append("<td>" + EmpData.QTDE_PERGUNTAS + "</td>");
                  tr.append("<td>" + "<a id='deleteItem' class='deleteItem' data-target='#basic' data-toggle='modal' data-id='" + EmpData.COD_EXAME + "'>Deletar</a>" + " | " + "<a id='deletar' class='confirmation-callback' href=/Exame/Edit/" + Empid + ">Edit</a>" + "</td>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');

                  $('#TblEmpDet').append(tr);
              });
          });

    }

    function Validate() {
        
       
         if ($("#txtDescricaoExame").val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Favor preencher o campo exame!');
            $('#DivMensagemValidacao').show();
            return false;
         }
         if ($("#txtQuantidadePerguntas").val() == "") {
             $('#ConteudoErro').empty();
             $("#ConteudoErro").text('Favor preencher o campo quantidade de perguntas!');
             $('#DivMensagemValidacao').show();
             return false;
         }
         if ($("#txtQuantidadeMinutos").val() == "") {
             $('#ConteudoErro').empty();
             $("#ConteudoErro").text('Favor preencher o campo quantidade minutos!');
             $('#DivMensagemValidacao').show();
             return false;
         }
         if ($("#txtPercentualAprovacao").val() == "") {
             $('#ConteudoErro').empty();
             $("#ConteudoErro").text('Favor preencher o campo percentual!');
             $('#DivMensagemValidacao').show();
             return false;
         }
         $('#DivMensagemValidacao').hide();

         return true;
    }

    $("#btnsave").click(function () {
     
        if (Validate()) {

            var Exame = {
                DescricaoExame: $("#txtDescricaoExame").val(),
                DescricaoPercentualAcerto: $('#txtPercentualAprovacao').val(),
                QuantidadePerguntas: $('#txtQuantidadePerguntas').val(),
                QuantidadeTempo: $('#txtQuantidadeMinutos').val(),

            };
            $.ajax({
                type: "POST",
                URL: "/Exame/Create/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ objExame: Exame }),
                error: function (response) {
                    //alert(response);
                },
                success: function (response) {
                    $("#txtDescricaoExame").val(""),
                    $('#txtPercentualAprovacao').val(""),
                    $('#txtQuantidadePerguntas').val(""),
                    $('#txtQuantidadeMinutos').val(""),

                    $("#DivInner").html("<div class='alert alert-primary' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                    $('#DivInner').show();
                }
            });
        }else{

           
        }

    });

}(jQuery));