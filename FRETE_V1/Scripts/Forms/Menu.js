(function ($) {

    //Variáveis globais
    CodigoNivel = 0;
    CodigoNivel2 = 0;

    //Page Load
    window.onload = function () {
        CarregaSelectExame();
        if ($('#CodigoExame').val() != undefined) {
            CarregaSelectParametro($('#CodigoExame').val());
            $("#SelectDiv  option:contains('" + $('#CodigoNivel').val() + "')").attr('selected', true);
            $("#SelectTipoMenu option:contains('" + $('#IndicadorTipo   ').val() + "')").attr('selected', true);
            
            if ($('#IndicadorTipo').val() == 2) {

                $('#DivPerguntas').show();
            }

            if($('#SelectDiv').val() == 2){

                $('#DivDescricaoMenu').show();
                
            }

        }
    }

    function CarregarRespostaCorreta() {



        $('input:radio[name=Resposta]').each(function () {

            if ($(this).val() == $('#LetraCorreta').val()) {
                $(this).attr('checked', true);
            }
        });


    }

    function CarregaDropsEdicao() {



    }

    function CarregaSelectExame() {

      
        var option = "<option value=''></option>";
        // Função Carregar Drop Exames
        $.getJSON('/Parametros/RetornaExames/',
           {
               CodigoEmpresa: $('#CodigoEmpresa').val(),
           },
          function (json) {

              $.each(json, function (i, EmpData) {

                  if ($("#CodigoExame").val() == EmpData.COD_EXAME) {
                      option = option + "<option selected='Selected' value='" + EmpData.COD_EXAME + "'>" + EmpData.DSC_EXAME + "</option>";
                  } else {
                      option = option + "<option value='" + EmpData.COD_EXAME + "'>" + EmpData.DSC_EXAME + "</option>";
                  }

              });//each
              $('#SelectExame').append(option);
          });//GetJason

    }
   
    function CarregaSelectParametro(CodigoExame) {
      
         $.getJSON('/Perguntas/RetornaParametroExame/',
           {
               CodigoExame: CodigoExame,
           },
          function (json) {
              var i = 0;
              $.each(json, function (i, EmpData) {
                  if (i == 0) {
                      $('#lblConteudoParametro1').append(EmpData.DescricaoParametro);
                     

                      CarregaSelectConteudoParametro(EmpData.CodigoParametro, 1)

                  } else {
                      $('#lblConteudoParametro2').append(EmpData.DescricaoParametro);
                    
                      CarregaSelectConteudoParametro(EmpData.CodigoParametro, 2)
                  }
                  i = i + 1;
              });//each
          });//GetJason

    }

    function CarregaSelectConteudoParametro(Codigo, Select) {
        var option = "<option value=''></option>";
        // Função Carregar Drop Exames
        
        $.getJSON('/Perguntas/RetornaConteudoParametro/',
           {
               CodigoParametro: Codigo,
           },
          function (json) {

              $.each(json, function (i, EmpData) {
                  if (Select == 1) {
                      if ($('#DescricaoParametro1').val() != EmpData.DescricaoConteudoParametro) {
                          option = option + "<option value='" + EmpData.DescricaoConteudoParametro + "'>" + EmpData.DescricaoConteudoParametro + "</option>";
                      } else {

                          option = option + "<option selected='Selected' value='" + EmpData.DescricaoConteudoParametro + "'>" + EmpData.DescricaoConteudoParametro + "</option>";

                      }
                  } else {

                      if ($('#DescricaoParametro2').val() != EmpData.DescricaoConteudoParametro) {
                          option = option + "<option value='" + EmpData.DescricaoConteudoParametro + "'>" + EmpData.DescricaoConteudoParametro + "</option>";
                      } else {

                          option = option + "<option selected='Selected' value='" + EmpData.DescricaoConteudoParametro + "'>" + EmpData.DescricaoConteudoParametro + "</option>";

                      }


                  }

              });//each
              alert
              if (Select == 1)
                  $('#SelectParametro1').append(option);
              else
                  $('#SelectParametro2').append(option);
          });//GetJason

    }

    function CarregaSelectConteudoParametro1(CodigoParametro) {
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

                  $('#lblConteudoParametro1').append(EmpData.DescricaoParametro);
                  $('#lblConteudoParametro2').append(EmpData.DescricaoParametro);

              });//each
              $('#SelectParametro').append(option);
          });//GetJason

    }

    function Atualizar() {

        var ConteudoParametro = {
            DescricaoPergunta: $('#txtPergunta').val(),
            DescricaoParametro1: $('#SelectParametro1').val(),
            DescricaoParametro2: $('#SelectParametro2').val(),
            CodigoExame: $('#SelectExame').val(),
            DescricaoCorreta: RetornaLetraCorreta(),
            CodEmpresa: $('#CodigoEmpresa').val(),
            DescricaoJustificativa: $('#txtJustificativa').val(),
            DescricaoRespostaA: $('#Resposta1').val(),
            DescricaoRespostaB: $('#Resposta2').val(),
            DescricaoRespostaC: $('#Resposta3').val(),
            DescricaoRespostaD: $('#Resposta4').val()
        };
        $.ajax({
            type: "POST",
            URL: "/Perguntas/Edit/",
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

    function RetornaLetraCorreta() {

        var valor = "";
        $('input:radio[name=Resposta]').each(function () {

            if ($(this).is(':checked'))
                valor = $(this).val();
        })
        return valor;
    }

    function RetornaNomeMenu() {

        var CodigoIdentificacao = 0;
        TotalItensNivel1 = $('#SelectNivel1').find('option').length;
        TotalItensNivel2 = $('#SelectNivel2').find('option').length;
        

        if (TotalItensNivel1 > 1) {

            CodigoIdentificacao = $('#SelectNivel1').val();
        }
        if (TotalItensNivel2 > 1 && $('#SelectDiv').val() == 3) {

            CodigoIdentificacao = $('#SelectNivel2').val();
        }
        return CodigoIdentificacao;
    }

    function RetornaDescricaoMenu() {
        
        var NomeMenu = "";
        if ($('#SelectDiv').val()==2) {
           return NomeMenu = $('#SelectNivel2').val();
        }

        if ($('#SelectDiv').val() == 3) {
            if ($('#SelectParametro1').val() != "")
                return NomeMenu = $('#SelectParametro1').val();
            else {

                return NomeMenu = $('#SelectParametro2').val();
            }

        } else {
            return false;
        }
    }

    function RetornaCodigoIdentificacao() {

      /*  var CodigoIdentificacao = 0;
        TotalItensNivel1 = $('#SelectNivel1').find('option').length;
        TotalItensNivel2 = $('#SelectNivel2').find('option').length;


        if (TotalItensNivel1 > 1) {*/

            CodigoIdentificacao = $('#SelectNivel1').val();
        /*}
        if (TotalItensNivel2 > 1 && $('#SelectDiv').val() == 3) {

            CodigoIdentificacao = $('#SelectNivel2').val();*/
       // }
        return CodigoIdentificacao;
    }

    function Salvar() {

       

        if (Validar()) {
            var Menu = {


                CodigoExame: $('#SelectExame').val(),
                CodigoNivel: $('#SelectDiv').val(),
                DescricaoMenu: $('#DescricaoMenu').val(),
                IndicadorTipo: $('#SelectTipo').val(),
                QuantidadePerguntas: CalculoTotalPerguntas(),
                DescricaoParametro1: $('#SelectParametro1').val(),
                DescricaoParametro2: $('#SelectParametro2').val(),
                CodigoEmpresa: $('#CodigoEmpresa').val(),
                CodigoIdentificacao: RetornaCodigoIdentificacao(),
                CodigoNivelSuperior: $('#SelectNivel2').val(),
            };
            $.ajax({
                type: "POST",
                URL: "/Menu/Create/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ obj: Menu }),
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
                        $("#DivInner").html("<div class='alert alert-success' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
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

    function CalculoTotalPerguntas() {
        var TotalPerguntas = 0;

        if ($('#DivQuantidadePerguntas').is(":visible")) {
            TotalPerguntas = $('#DescricaoQuantidade').val();
        } else {

            TotalPerguntas= 0;
        }
        return TotalPerguntas;
    }

    function Buscar() {
        $('#TblEmpDet tbody').remove();


        var tr;
        $.getJSON('/Menu/Busca/',
           {
               DescricaoExame: $('#Descricao').val(),
             
           },
          function (json) {


              $.each(json, function (i, EmpData) {
                  tr = $('<tr/>');
                  tr.append("<td>" + EmpData.CodigoMenu + "</td>");
                  tr.append("<td>" + EmpData.DescricaoExame + "</td>");
                  tr.append("<td>" + EmpData.DescricaoMenu+ "</td>");
                  tr.append("<td>" + EmpData.CodigoNivel + "</td>");
                  tr.append("<td>" + EmpData.DescricaoParametro1 + "</td>");
                  tr.append("<td>" + EmpData.DescricaoParametro2 + "</td>");
                  tr.append("<td>" + "<a id='deleteItem' class='deleteItem' data-target='#basic' data-toggle='modal' data-id='" + EmpData.CodigoMenu + "'>Deletar</a>" +  "</td>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');

                  $('#TblEmpDet').append(tr);
              })

          });
    }

    function Excluir() {

        var id = $('#item-to-delete').val();

        var DeleteUrl = "/Menu/Delete/" + id;

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
                if (response.indexOf('Erro') >= 0) {
                    $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                    $('#DivInner').show();
                    $('#DivVoltar').show();
                    FecharMensagemExclusao();
                }
                if (response.indexOf('Aten') >=0) {
                    alert(Response);

                    $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                    $('#DivInner').show();
                    $('#DivVoltar').show();
                    $('html,body').scrollTop(10);
                    FecharMensagemExclusao();
                }
                else {
                    $("#DivInner").html("<div class='alert alert-success' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + response + "</div>");
                    $('#DivInner').show();
                    $('#DivVoltar').show();
                    $('html,body').scrollTop(10);
                    FecharMensagemExclusao();

                };
            }
        });
        $('#TblEmpDet tbody').remove();

    }

    function Validar() {


       if ($('#SelectExame').val() == "") {

            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar o exame!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }
       if ($('#SelectDiv').val() == "")
       {
                    $('#ConteudoErro').empty();
                    $("#ConteudoErro").text('Gentileza informar o nIvel do menu!');
                    $('#DivMensagemValidacao').show();
                    $('html,body').scrollTop(10);
                    return false;
        }

        if ($('#SelectDiv').val() == "2") {
            //Nivel 1 SelectNivel1
            if ($('#SelectNivel1').val()=="") {
                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informar o nível 1');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);
                return false;
            }
        }

        if ($('#SelectDiv').val() == "2")
        {
           
            if ($('#DescricaoMenu').val() == "")
            {
                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informar a descrição do menu');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);
                return false;
            }
        }

        if ($('#SelectDiv').val() == "3") 
        {
            //Nivel 1 SelectNivel1
            if ($('#SelectNivel1').val()=="") 
            {
                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informar o nível 1');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);
                return false;
            }
            if ($('#SelectNivel2').val()=="") 
            {
                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informar o nível 2');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);
                return false;
            }
        }


               
        if ($('#SelectTipo').val() == "") {

            $('#ConteudoErro').empty();
            $("#ConteudoErro").text('Gentileza informar se o registro será link ou tItulo!');
            $('#DivMensagemValidacao').show();
            $('html,body').scrollTop(10);
            return false;
        }
        //Se for Link validar....
       /* if ($('#SelectTipo').val() == "2") {

            // Validar parametro 1 se tiver SelectParametro1 SelectParametro2 SelectPerguntas


            if ($('#SelectParametro1 option').size() == 0 && $('#SelectParametro2 option').size() == 0) {

                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informar uma das caracteristicas!');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);

                return false;
            }
            if ($('#SelectParametro1 option').size() > 0 && $('#SelectParametro2 option').size() > 0) {

                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informar apenas uma cararcteristica!');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);

                return false;
            }

            if ($('#SelectPerguntas option').size() > 0) {

                $('#ConteudoErro').empty();
                $("#ConteudoErro").text('Gentileza informe o total de perguntas!');
                $('#DivMensagemValidacao').show();
                $('html,body').scrollTop(10);

                return false;
            }
            if ($('#SelectPerguntas option').val() == "Limitada") {

                if ($('#SDescricaoQuantidade').val() == "") {
                    $('#ConteudoErro').empty();
                    $("#ConteudoErro").text('Gentileza informe o total de perguntas!');
                    $('#DivMensagemValidacao').show();
                    $('html,body').scrollTop(10);

                    return false;
                }
                //Se o usuário selecionar Limitada
            }
        }*/

            
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

    function FecharMensagemExclusao() {
        function fecharMensagem() {
            $('#DivInner').hide();
            //window.location.reload();
        }
        window.setTimeout(fecharMensagem, 7000);

    }

    function CarregaSelectNivel2(CodigoExame,CodigoIdentificacao) {
       /* $('#SelectNivel1').empty();
        $('#DivNivel1').hide();
        $('#DivNivel2').hide();*/
        //async: false,

        var option = "<option value=''></option>";
        // Função Carregar Drop Exames

        $.getJSON('/Menu/RetornaNivel2/',
           {
               CodigoExame: CodigoExame,
               CodigoIdentificacao: CodigoIdentificacao
           },
          function (json) {
              
              $.each(json, function (i, EmpData) {

                 // if ($("#CodigoExame").val() == EmpData.COD_EXAME) {
                     // option = option + "<option selected='Selected' value='" + EmpData.CodigoIdentificacao + "'>" + EmpData.DescricaoMenu + "</option>";
                  /*} else {*/
                  option = option + "<option value='" + EmpData.CodigoMenu + "'>" + EmpData.DescricaoMenu + "</option>";
                  /*}*/
                     
              });//eachnivel
              $('#SelectNivel2').append(option);
              
          });//GetJason

    }

    function CarregaSelectNivel(CodigoExame, nivel) {
        $('#SelectNivel1').empty();
        $('#DivNivel1').hide();
        $('#DivNivel2').hide();
        //async: false,

        var option = "<option value=''></option>";
        // Função Carregar Drop Exames

        $.getJSON('/Menu/RetornaNivel/',
           {
               CodigoExame: CodigoExame,
               CodigoNivel: 1
           },
          function (json) {

              $.each(json, function (i, EmpData) {

                  // if ($("#CodigoExame").val() == EmpData.COD_EXAME) {
                  // option = option + "<option selected='Selected' value='" + EmpData.CodigoIdentificacao + "'>" + EmpData.DescricaoMenu + "</option>";
                  /*} else {*/
                  option = option + "<option value='" + EmpData.CodigoIdentificacao + "'>" + EmpData.DescricaoMenu + "</option>";
                  /*}*/
                 
              });//eachnivel
              $('#SelectNivel1').append(option);

          });//GetJason

    }
    
    function AjustaDropNivel() {

        //alert(CodigoNivel);
      
       /* if (CodigoNivel1 == 0 && CodigoNivel2 == 0) {
            $("#SelectDiv option[value='2']").remove();
            $("#SelectDiv option[value='3']").remove();
        }
        if (CodigoNivel1 != 0 && CodigoNivel2 == 0) {
            $("#SelectDiv option[value='2']").remove();
            $("#SelectDiv option[value='3']").remove();
        }*/
        

        //alert("Nivel 1:"+CodigoNivel1);
        //alert("Nivel 2:" + CodigoNivel2);
    }


    $('#SelectTipo').on('change', function () {
      
        TotalItensNivel1 = $('#SelectNivel1').find('option').length;
        TotalItensNivel2 = $('#SelectNivel2').find('option').length;

        if ($('#SelectTipo').val() == 2) {

                      //Verificar se os selects de parâmentro estão preenchidos SelectParametro1 SelectParametro2
            if ($('#SelectParametro1 option').size() > 0) {
                $('#DivParametro1').show();
            }
            if ($('#SelectParametro2 option').size() > 0) {
                $('#DivParametro2').show();
            }
            $('#DivPerguntas').show();
        } else {
            $('#DivParametro1').hide();
            $('#DivParametro2').hide();
            $('#DivPerguntas').hide();

        }

        if (TotalItensNivel1 == 1) {
            $('#DivParametro1').hide();
        }
        if (TotalItensNivel2 == 1) {
            $('#DivParametro2').hide();
        }

    });
    
    $('#SelectNivel1').on('change', function () {
      
    
        CarregaSelectNivel2($('#SelectExame').val(), this.value);


    });
        //Eventos
    $('#SelectExame').on('change', function () {
        CodigoNivel = 0;
        $('#DivNivel1').hide();
        $('#DivNivel2').hide();
        $('#SelectParametro1').empty();
        $('#SelectParametro2').empty();
        $('#SelectNivel1').empty();
        $('#SelectNivel2').empty();

        $('#SelectDiv').prop('selectedIndex', 0);
        $('#DivParametro1').hide();
        $('#DivParametro2').hide();
        CarregaSelectParametro(this.value);
       // CarregaSelectNivel(this.value, 1);
       CarregaSelectNivel(this.value, 1);
       AjustaDropNivel();
      
       

    });

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

    $('#SelectPerguntas').on('change', function () {

        if ($('#SelectPerguntas').val() == "Limitada") {
            $('#DivQuantidadePerguntas').show();
        } else {
            $('#DivQuantidadePerguntas').hide();

        }
    });

    $('#SelectDiv').on('change', function () {
         
        TotalItensNivel1 = $('#SelectNivel1').find('option').length;
        TotalItensNivel2 = $('#SelectNivel2').find('option').length;
        $('#DivInner').hide();
        $('#DivNivel1').hide();
        $('#DivNivel2').hide();
        $('#DivDescricaoMenu').hide();

        $('#DescricaoMenu').val('');

        if (this.value == 1) {

            $('#DescricaoMenu').val($("#SelectExame option:selected").text());
        }

        if (this.value == 2) {

            $('#DivDescricaoMenu').show()
           if (TotalItensNivel1 == 1) {
               $("#DivInner").html("<div class='alert alert-warning' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>Cadastre primeiro o nivel 1 .</div>");
               $('#DivInner').show();
               FecharMensagemSucesso();
               $('#SelectDiv').val(1);
           }
             else {
               $('#DivNivel1').show();
           }
        }
        if (this.value == 3) {
            if (TotalItensNivel1 < 2) {
                $("#DivInner").html("<div class='alert alert-warning' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>Para cadastrar o nivel 3, primeiro cadastre o nivel 1 e 2.</div>");
                $('#DivInner').show();
                FecharMensagemSucesso();
    
            }
            else {
                $('#DivNivel1').show();
                $('#DivNivel2').show();
            }
        }
        
        
    });
    
}(jQuery));