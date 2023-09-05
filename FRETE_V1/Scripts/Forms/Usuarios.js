(function ($) {

    //Page Load
    window.onload = function () {
      
       // alert($("#CodigoUsuario").val());

        if ($("#CodigoUsuario").val() != undefined) {

            CarregaPermissoesExameUsuario();

        } else {

            CarregarCheckPermissoesExame();
        }

        
       // $("#DataExpiracao").datepicker();

    }

    function CarregaPermissoesExameUsuario() {

        var tr;
        $.getJSON('/Usuarios/CarregaComboExameAluno/',
          {
              CodigoAluno: $("#CodigoUsuario").val(),
          },
         function (json) {
             $.each(json, function (i, EmpData) {

                 if (EmpData.PossuiPermissao == 0) {
                     $('#DivInnerCheckBox').append("<input type='checkbox' name='CheckExames' value='" + EmpData.CodigoExame + "'> " + EmpData.DescricaoExame + "</input><br>");
                 } else {

                     $('#DivInnerCheckBox').append("<input type='checkbox' checked name='CheckExames' value='" + EmpData.CodigoExame + "'> " + EmpData.DescricaoExame + "</input><br>");

                 }
                 
            })

         });
    }
    
    function CarregarCheckPermissoesExame() {

         var tr;
         $.getJSON('/Usuarios/CarregaComboExame/',
           {
               CodigoUsuario:1,
           },
          function (json) {
              $.each(json, function (i, EmpData) {
                 
                  $('#DivInnerCheckBox').append("<input type='checkbox' name='CheckExames' value='"+EmpData.CodigoExame+"'> "+EmpData.DescricaoExame+"</input><br>");
              })

          });
    }

    function Atualizar() {

        var ConteudoParametro = {
            DescricaoUsuario: $('#Usuario').val(),
            DescricaoEmail: $('#Email').val(),
            DescricaoLogin: $('#Login').val(),
            DescricaoSenha: $('#Senha').val(),
            CodigoPerfil: $('#SelectPerfil').val(),
            DataExpiracaoString: $('#DataExpiracao').val(),
            CodigoUsuario: $('#CodigoUsuario').val(),
            ExamesSelecionados: RetornaValoresExamesSelecionados(),
        };
        $.ajax({
            type: "POST",
            URL: "/Usuarios/Edit/",
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

    function RetornaValoresExamesSelecionados() {

        var ExamesSelecionados = "";

        $('input[name="CheckExames"]:checked').each(function () {

            ExamesSelecionados = ExamesSelecionados+ this.value+";";

        });
        return ExamesSelecionados;
    }
   
    function Salvar() {
              
        if (Validar()) {

            var Usuarios = {
             DescricaoUsuario: $('#Usuario').val(),
             DescricaoEmail:$('#Email').val(),
             DescricaoLogin : $('#Login').val(),
             DescricaoSenha : $('#Senha').val(),
             CodigoPerfil : $('#SelectPerfil').val(),
             DataExpiracaoString: $('#DataExpiracao').val(),
             ExamesSelecionados: RetornaValoresExamesSelecionados(),

            };
            $.ajax({
                type: "POST",
                URL: "/Usuarios/Create/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ obj: Usuarios }),
                error: function (response) {
                    //alert(response);'
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
                        $('html,body').scrollTop(10);
                        FecharMensagemSucesso();
                    };
                }
            })

        } else {


        }
    }

    function ValidaBusca() {

        if ($('#SelectExame').val() == "") {

            $("#DivInner").html("<div class='alert alert-info' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>Por favor informe o exame para efetuar a busca</div>");
            $('#DivInner').show();
            $('#DivVoltar').show();
            $('html,body').scrollTop(10);
            FecharMensagemSucesso();
            return false;
        }

        return true;
    }

    function Buscar() {
        $('#TblEmpDet tbody').remove();

        if (ValidaBusca()) {
            var tr;
            $.getJSON('/Usuarios/Busca/',
               {
                  
                   DescricaoUsuario: $('#Usuario').val(),

               },
              function (json) {


                  $.each(json, function (i, EmpData) {
                      tr = $('<tr/>');
                      tr.append("<td>" + EmpData.CodigoUsuario + "</td>");
                      tr.append("<td>" + EmpData.DescricaoUsuario + "</td>");
                      tr.append("<td>" + EmpData.DescricaoEmail + "</td>");
                      tr.append("<td>" + EmpData.DescricaoLogin + "</td>");
                      tr.append("<td>" + EmpData.DescricaoPerfil + "</td>");

                      tr.append("<td>" + "<a id='deleteItem' class='deleteItem' data-target='#basic' data-toggle='modal' data-id='" + EmpData.CodigoUsuario + "'>Deletar</a>" + " | " + "<a id='deletar' class='confirmation-callback' href=/Usuarios/Edit/" + EmpData.CodigoUsuario + ">Edit</a>" + "</td>");
                      tr.append('<input type="hidden" id="item-to-delete"/>');
                      $('#TblEmpDet').append(tr);
                  })

              });
        }
    }

    function Excluir() {

        var id = $('#item-to-delete').val();

        var DeleteUrl = "/Usuarios/Delete/" + id;

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
        

        if ($('#Usuario').val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar o usuario!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }

        if ($('#Email').val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar o email!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }
        if ($('#Login').val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar o login!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }
        if ($('#Senha').val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar a senha!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }
        if ($('#DataExpiracao').val() == "") {
            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar a data de expiração do usuário!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }
           
    
        $('#DivMensagemValidacao').hide();

        return true;
    }

    function ValidarBusca() {


        if ($('#SelectExame').val() == "") {

            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar o exame para realizar a busca!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }

        $('#DivMensagemValidacao').hide();

        return true;
    }

    function FecharMensagemSucesso() {
        function fechar() {
            $('#DivInner').hide();

        }
        window.setTimeout(fechar, 4000);

    }

    $("#btnUpdate").click(function () {
        if (Validar()) {
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