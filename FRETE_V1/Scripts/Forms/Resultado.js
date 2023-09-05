(function ($) {
   
     //Pageload
    window.onload = function () {

        if ($('#DadosGrafico').val() != undefined) {

           
            BuscaConteudoGraficoInformandoAlunoExameInterfaceDetalhamento();

        }

        dataFormatada();
        DescricaoExame = "";
        DescricaoExameParametro = "";
        DescricaoExameParametro1 = "";
        DescricaoExameParametro2 = "";
        CarregaSelectExame();
           
        BuscaConteudoGraficoInformandoAlunoExame($('#CodigoExame').val());
        CarregaGraficoPorParametro1($('#CodigoExame').val());
        CarregaGraficoPorParametro2($('#CodigoExame').val());

    }

    function dataFormatada() {
        var d = new Date();

        var month = d.getMonth() + 1;
        var day = d.getDate();
        var year = d.getFullYear();

        $('#DataInicio').val(day + "/" + month + "/" + year);
        $('#DataFim').val(day + "/" + month + "/" + year);


    }
    function GeraDadosGraficoDiario() {

        var dados = "";
        dados = dados + "[{ label: '01/11', y: 80 }]";

        return dados;

    }

    //Carrega gráfico Interface de Detalhamento
    function BuscaConteudoGraficoInformandoAlunoExameInterfaceDetalhamento() {
        var dataPoints = [];
        var flag = 0;
        
   

        $.getJSON('/Resultado/RetornaGraficoExameEvolucaoPeriodo/',
          {
              CodigoExame:$('#CodigoExame').val(),
              DataInicioParametro:$('#DataInicio_').val(),
              DataFimParametro: $('#DataFim_').val(),
              Parametro1:$('#Parametro1').val(),
              Parametro2:$('#Paramentro2').val(),  
                      },
         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPoints.push({ label: EmpData.DataExameFormatada, y: EmpData.PercentualAcertoExame });
                 DescricaoExame = EmpData.DescricaoExame;
             })
             CarregaDadosGraficoAlunosExameEvolucao(dataPoints);

             flag = 1;
         });



    }
    function CarregaDadosGraficoAlunosExameEvolucao(dataPoints) {

        var NomeDiv = "chartContainerGrafico";
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);

        //alert(DescricaoExame);

        var chart = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Desempenho no periodo  " + $('#DataInicio_').val() + " a " + $('#DataFim_').val(),
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 100,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                 {
                     type: "line",
                     name: "",
                     legendText: "",
                     showInLegend: true,
                     dataPoints: dataPoints
                 }

                 ],
                 legend: {
                     cursor: "pointer",
                     itemclick: function (e) {
                         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                             e.dataSeries.visible = false;
                         }
                         else {
                             e.dataSeries.visible = true;
                         }
                         chart.render();
                     }
                 },
             });
        DescricaoExame = "";
        chart.render();
    }
    //Fim Gráfico Exames Por dia
    
    //Carrega gráfico de acordo com o exame selecionado
    function BuscaConteudoGraficoInformandoAlunoExame(CodigoExame) {
        var dataPoints = [];
        var flag = 0;
        
        $.getJSON('/Resultado/RetornaGraficoExame/',
          {
              CodigoExame: CodigoExame,
          },
         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPoints.push({ label: EmpData.DataExameFormatada, y: EmpData.PercentualAcertoExame });
                 DescricaoExame = EmpData.DescricaoExame;
               })
             CarregaDadosGraficoAlunosExame(dataPoints);
             
             flag = 1;
         });

      

    }
    function CarregaDadosGraficoAlunosExame(dataPoints) {

        var NomeDiv = "chartContainer1";
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);
        
        //alert(DescricaoExame);

        var chart = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame + " Percentual Aproveitamento Por Dia",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 100,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                 {
                     type: "stackedColumn",
                     name: "",
                     legendText: "",
                     showInLegend: true,
                     dataPoints: dataPoints
                 }

                 ],
                 legend: {
                     cursor: "pointer",
                     itemclick: function (e) {
                         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                             e.dataSeries.visible = false;
                         }
                         else {
                             e.dataSeries.visible = true;
                         }
                         chart.render();
                     }
                 },
             });
        DescricaoExame = "";
        chart.render();
    }
    //Fim Gráfico Exames Por dia
   
    //Inicio Gráfico Exames Por Parametro 1
    function CarregaGraficoPorParametro1(CodigoExame) {
        var dataPointsParametro = [];
        var flag = 0;
        $.getJSON('/Resultado/RetornaGraficoPorExameParametro1/',
          {
              CodigoExame: CodigoExame,
          },
          
         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPointsParametro.push({ label: EmpData.DescricaoParametro1, y: EmpData.PercentualAcertoExame });
                 //dataPoints.push({ label: '15/01', y: 10 });D
                 DescricaoExameParametro1 = EmpData.DescricaoParametro;
                 DescricaoExame = EmpData.DescricaoExame;
                 flag = 1;
             })
             if (flag == 1) {
                 $('#chartContainer2').show();
                 CarregaGraficoParametro1PorExame(dataPointsParametro);
             } else {

                 $('#chartContainer2').hide();
             }
             
         });

    }
    function CarregaGraficoParametro1PorExame(dataPoints) {

        var NomeDiv = "chartContainer2";
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);

        var chart = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame + " " + DescricaoExameParametro1,
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 100,
                 },
                 axisY2: {
                     title: "Percentual"
                 },
                 data: [
                 {
                     type: "stackedColumn",
                     name: "",
                     legendText: "",
                     showInLegend: true,
                     dataPoints: dataPoints
                 }

                 ],
                 legend: {
                     cursor: "pointer",
                     itemclick: function (e) {
                         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                             e.dataSeries.visible = false;
                         }
                         else {
                             e.dataSeries.visible = true;
                         }
                         chart.render();
                     }
                 },
             });
        chart.render();
    }
    //Fim Gráfico Exames Por Parametro 1

    //Inicio Gráfico Exames Por Parametro 1
    function CarregaGraficoPorParametro2(CodigoExame) {
        var dataPointsParametro = [];
        var DescricaoParametro = "";
        var flag = 0;
        $.getJSON('/Resultado/RetornaGraficoPorExameParametro2/',
          {
              CodigoExame: CodigoExame,
          },          

         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPointsParametro.push({ label: EmpData.DescricaoParametro2, y: EmpData.PercentualAcertoExame });
                 //dataPoints.push({ label: '15/01', y: 10 });D
                 DescricaoParametro = EmpData.DescricaoParametro;
                 DescricaoExame = EmpData.DescricaoExame;
                 flag = 1;
             })
             if (flag == 1) {
                 $('#chartContainer3').show();
                 CarregaGraficoParametro2PorExame(dataPointsParametro, DescricaoParametro);
             } else {

                 $('#chartContainer3').hide();
             }
         });

    }
    function CarregaGraficoParametro2PorExame(dataPoints, DescricaoParametro) {

        var NomeDiv = "chartContainer3";
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);


        var chart = new CanvasJS.Chart(chartContainer3,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame + " " + DescricaoParametro,
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 100,
                 },
                 axisY2: {
                     title: "Percentual"
                 },
                 data: [
                 {
                     type: "stackedColumn",
                     name: "",
                     legendText: "",
                     showInLegend: true,
                     dataPoints: dataPoints
                 }

                 ],
                 legend: {
                     cursor: "pointer",
                     itemclick: function (e) {
                         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                             e.dataSeries.visible = false;
                         }
                         else {
                             e.dataSeries.visible = true;
                         }
                         chart.render();
                     }
                 },
             });
        chart.render();
    }
    //Fim Gráfico Exames Por Parametro 1
    
    function CarregaSelectExame() {

        var option = "<option value='0'>Selecione o Exame</option>";

        $.getJSON('/Resultado/RetornaExames/', {

        },
          function (json) {

              $.each(json, function (i, EmpData) {

                  option = option + "<option value='" + EmpData.CodigoExame + "'>" + EmpData.DescricaoExame + "</option>";


              });//each
              $('#SelectExame').append(option);
          });//GetJason

    }
    
    function LimparSelectParametro() {

        $('#SelectParametro1').empty();
        $('#SelectParametro2').empty();
        $('#DivParametro1').hide();
        $('#DivParametro2').hide();

    }


    $('#SelectExame').on('change', function () {

        LimparSelectParametro();
       

        CarregaSelectParametro(this.value);
        BuscaConteudoGraficoInformandoAlunoExame(this.value);
        CarregaGraficoPorParametro1(this.value);
        CarregaGraficoPorParametro2(this.value);
        DescricaoExame = "";
    });

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
                      $('#DivParametro1').show();

                      CarregaSelectConteudoParametro(EmpData.CodigoParametro, 1)

                  } else {
                      $('#lblConteudoParametro2').append(EmpData.DescricaoParametro);
                      $('#DivParametro2').show();
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

}(jQuery));