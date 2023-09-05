(function ($) {   
  
    //Page Load
    window.onload = function () {
        CarregaSelectExame();
        if ($('#CodigoExame').val() != undefined) {
            CarregaSelectParametro($('#CodigoExame').val());
        }
    }


    
    // Métodos
    function CarregaSelectExame() {
       
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

    }
    
    function CarregaSelectParametro(CodigoExame){
        var option = "";
        if (CodigoExame == undefined) {
            option = "<option value='' selected='Selected'></option>";
        } else {

            option = "<option value=''></option>";
        }
        
        $.getJSON('/ConteudoParametros/RetornaParametroExame/',
           {
               CodigoExame: CodigoExame,
           },
          function (json) {

              $.each(json, function (i, EmpData) {
                
                  if ($('#CodigoParametro').val() == EmpData.CodigoParametro) {
                      option = option + "<option value='" + EmpData.CodigoParametro + "' selected='Selected'>" + EmpData.DescricaoParametro + "</option>";
                  } else {

                      option = option + "<option value='" + EmpData.CodigoParametro + "'>" + EmpData.DescricaoParametro + "</option>";
                  }

              });//each
              $('#SelectParametro').append(option);
          });//GetJason

    }

    function Atualizar() {

        var ConteudoParametro = {
            DescricaoConteudoParametro: $("#txtDescricaoParametro").val(),
            CodigoParametro: $("#SelectParametro").val(),
            CodigoConteudoParametro: $("#CodigoConteudoParametro").val(),
        };
        $.ajax({
            type: "POST",
            URL: "/ConteudoParametros/Edit/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({ obj: ConteudoParametro }),
            error: function (response) {
                alert(response.responseText);
            },
            success: function (response) {
                if (response.indexOf('Erro') > -1) {
                    $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                    $('#DivInner').show();
                    $('#DivVoltar').show();
                } else {
                    $("#DivInner").html("<div class='alert alert-primary' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "   </div>");
                    $('#DivInner').show();
                    $('#DivVoltar').show();
                    FecharMensagemSucesso();
                }

            }
        });
    }

    function Salvar() {

        if (Validar()) {
            var ConteudoParametro = {
                DescricaoConteudoParametro: $("#txtDescricaoParametro").val(),
                CodigoParametro: $("#SelectParametro").val()

            };
            $.ajax({
                type: "POST",
                URL: "/Parametros/Create/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ obj: ConteudoParametro }),
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
        } else {


        }
    }

    function Buscar() {
        $('#TblEmpDet tbody').remove();


        var tr;
        $.getJSON('/ConteudoParametros/Busca/',
           {

               CodigoExame: $('#SelectExame').val(),
           },
          function (json) {


              $.each(json, function (i, EmpData) {
                  tr = $('<tr/>');
                  tr.append("<td>" + EmpData.CodigoConteudoParametro + "</td>");
                  tr.append("<td>" + EmpData.DescricaoExame + "</td>");
                  tr.append("<td>" + EmpData.DescricaoParametro + "</td>");
                  tr.append("<td>" + EmpData.DescricaoConteudoParametro + "</td>");
                  tr.append("<td>" + "<a id='deleteItem' class='deleteItem' data-target='#basic' data-toggle='modal' data-id='" + EmpData.CodigoConteudoParametro + "'>Deletar</a>" + " | " + "<a id='deletar' class='confirmation-callback' href=/ConteudoParametros/Edit/" + EmpData.CodigoConteudoParametro + ">Edit</a>" + "</td>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');

                  $('#TblEmpDet').append(tr);
              })

          });
    }

    function Excluir() {

        var id = $('#item-to-delete').val();

        var DeleteUrl = "/ConteudoParametros/Delete/" + id;

        $.ajax({
            url: DeleteUrl,
            async: false,
            dataType: "json",
            type: "POST",
            contentType: "application/json",
            error: function (response) {
                alert(response);
            },
            success: function (response) {

                if (response.indexOf('Erro') > -1) {
                    $("#DivMensagemErro").append(response);
                    $('#DivMensagemErro').show();
                    $('#TblEmpDet tbody').remove();

                } else {
                    // $("#DivMensagemSucesso").append(response);
                    // $('#DivMensagemSucesso').show();


                }
            }
        });
        $('#TblEmpDet tbody').remove();

    }

    function Validar() {

        if ($("#SelectExame").val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Favor selecionar o exame!');
            $('#DivMensagemValidacao').show();
            return false;
        }
        if ($("#SelectParametro").val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Favor selecionar a caracteristica!');
            $('#DivMensagemValidacao').show();
            return false;
        }
        //txtDescricaoParametro

        if ($("#txtDescricaoParametro").val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Favor informar o conteúdo da caracteristica!');
            $('#DivMensagemValidacao').show();
            return false;
        }


        $('#DivMensagemValidacao').hide();

        return true;
    }

    function FecharMensagemSucesso() {
        function fechar() {
            $('#DivInner').hide();
            window.location.reload();
        }
        window.setTimeout(fechar, 2000);

    }
    //Eventos
    $('#SelectExame').on('change', function () {
        
        CarregaSelectParametro(this.value);
        
    });

    $("#btnUpdate").click(function () {
        if(Validar()){
            Atualizar();
        }
    });

    $('#btnPesquisar').click(function () {

        Buscar();
    });

    $(document).on('click', '.deleteItem', function () {

        var id = $(this).data('id');
        $('#item-to-delete').val(id);

    });

    $('#btnContinueDelete').click(function () {
        Excluir();
        Buscar();

    });

    $("#btnsave").click(function () {
        Salvar();
    });
    
    

}(jQuery));