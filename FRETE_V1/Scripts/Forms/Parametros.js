$(document).ready(function ($) {
  
   
    var option = "<option value=''></option>";
    // Função Carregar Drop Exames
    $.getJSON('/Parametros/RetornaExames/',
       {
           
       },
      function (json) {

          $.each(json, function (i, EmpData) {
           
              if ($("#CodigoExame").val() == EmpData.CodigoExame) {
                  option = option + "<option selected='Selected' value='" + EmpData.CodigoExame + "'>" + EmpData.DescricaoExame + "</option>";
              } else {
                  option = option + "<option value='" + EmpData.CodigoExame + "'>" + EmpData.DescricaoExame + "</option>";
              }
             
          });//each
          $('#SelectExame').append(option);
      });//GetJason
    
    $("#btnUpdate").click(function () {

        if (Validate()) {
            var Parametro = {
                DescricaoParametro: $("#txtDescricaoParametro").val(),
                CodigoExame: $("#SelectExame").val(),
                CodigoParametro: $("#CodigoParametro").val()
            };
            $.ajax({
                type: "POST",
                URL: "/Parametros/Edit/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ objParametro: Parametro }),
                error: function (response) {
                    //alert(response.responseText);
                },
                success: function (response) {
                    if (response.indexOf('Erro') > -1) {
                        $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                        $('#DivInner').show();
                        $('#DivVoltar').show();
                    } else {
                        $("#DivInner").html("<div class='alert alert-primary' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                        $('#DivInner').show();
                        $('#DivVoltar').show();
                    }

                }
            });
        }
    });
  
    function Buscar() {
        $('#TblEmpDet tbody').remove();


        var tr;
        $.getJSON('/Parametros/Busca/',
           {

               DescricaoParametro: $('#txtDescricaoParametro').val(),
           },
          function (json) {


              $.each(json, function (i, EmpData) {
                  tr = $('<tr/>');
                  tr.append("<td>" + EmpData.CodigoParametro + "</td>");
                  tr.append("<td>" + EmpData.DescricaoParametro + "</td>");
                  tr.append("<td>" + EmpData.DescricaoExame + "</td>");
                  tr.append("<td>" + "<a id='deleteItem' class='deleteItem' data-target='#basic' data-toggle='modal' data-id='" + EmpData.CodigoParametro + "'>Deletar</a>" + " | " + "<a id='deletar' class='confirmation-callback' href=/Parametros/Edit/" + EmpData.CodigoParametro + ">Edit</a>" + "</td>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');

                  $('#TblEmpDet').append(tr);
              })

          });
    }

    $('#btnPesquisar').click(function () {

        $('#TblEmpDet tbody').remove();


        var tr;
        $.getJSON('/Parametros/Busca/',
           {

               DescricaoParametro: $('#txtDescricaoParametro').val(),
           },
          function (json) {


              $.each(json, function (i, EmpData) {
                  tr = $('<tr/>');
                  tr.append("<td>" + EmpData.CodigoParametro + "</td>");
                  tr.append("<td>" + EmpData.DescricaoParametro + "</td>");
                  tr.append("<td>" + EmpData.DescricaoExame + "</td>");
                  tr.append("<td>" + "<a id='deleteItem' class='deleteItem' data-target='#basic' data-toggle='modal' data-id='" + EmpData.CodigoParametro + "'>Deletar</a>" + " | " + "<a id='deletar' class='confirmation-callback' href=/Parametros/Edit/" + EmpData.CodigoParametro + ">Edit</a>" + "</td>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');

                  $('#TblEmpDet').append(tr);
              })

          });

    });
    
   $(document).on('click', '.deleteItem', function () {
      
        var id = $(this).data('id');
        $('#item-to-delete').val(id);
        
    });

   $('#btnContinueDelete').click(function() {
       Excluir();
       Buscar(); 
       
   });

    function Excluir() {
        
        var id = $('#item-to-delete').val();

        var DeleteUrl = "/Parametros/Delete/" + id;

        $.ajax({
            url: DeleteUrl,
            async: false,
            dataType: "json",
            type: "POST",
            contentType: "application/json",
            error: function (response) {
               // alert(response);
            },
            success: function (response) {

                if (response.indexOf('Erro') >= 0) {
                    $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                    $('#DivInner').show();
                    $('#DivVoltar').show();
                    FecharMensagemExclusao();
                }
                if (response.indexOf('Aten') >= 0) {
                    //alert(Response);

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
              }
        });
   
    }

    function Validate() {        
              
         if ($("#SelectExame").val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Favor preencher o campo exame!');
            $('#DivMensagemValidacao').show();
            return false;
         }
         if ($("#txtDescricaoParametro").val() == "") {
             $('#ConteudoErro').empty();
             $("#ConteudoErro").text('Favor informar o característica!');
             $('#DivMensagemValidacao').show();
             return false;
         }
       
         $('#DivMensagemValidacao').hide();

         return true;
    }
   
    $("#btnsave").click(function () {
     
       
        if (Validate()) {          

            var Parametro = {
                DescricaoParametro: $("#txtDescricaoParametro").val(),
                CodigoExame: $("#SelectExame").val()

            };
            $.ajax({
                type: "POST",
                URL: "/Parametros/Create/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ objParametro: Parametro }),
                error: function (response) {
                    //alert(response);'
                },
                success: function (response) {
                    if (response.indexOf('Erro') > -1) {
                        $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                        $('#DivInner').show();
                        $('#DivVoltar').show();
                    }
                    else if (response.indexOf('Atenção') > -1) {
                        $("#DivInner").html("<div class='alert alert-warning' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                        $('#DivInner').show();
                        $('#DivVoltar').show();
                        $('html,body').scrollTop(10);
                        window.location.reload();
                    }
                    else {
                        $("#DivInner").html("<div class='alert alert-primary' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                        $('#DivInner').show();
                        $('#DivVoltar').show();
                        $('html,body').scrollTop(10);
                        FecharMensagemSucesso();

                    };
                }
            });
        }else{

           
        }

    });

    function FecharMensagemSucesso() {
        function fechar() {
            $('#DivInner').hide();
            window.location.reload();
        }
        window.setTimeout(fechar, 1000);

    }
}(jQuery));