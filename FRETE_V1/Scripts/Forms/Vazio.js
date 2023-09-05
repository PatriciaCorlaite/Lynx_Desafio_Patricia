(function ($) {



    //Pageload
    window.onload = function () {
        DescricaoExame = "";
        DescricaoExameParametro = "";
        CarregaSelectExame();

        if ($("#CodigoMenu").val() == undefined) {

            CarregaGraficoExame();
            CarregaGraficoExameParametro();

        } else {

            CarregaGraficoCodigoMenu();

        }
    }

    function GeraDadosGraficoDiario() {

        var dados = "";
        dados = dados + "[{ label: '01/11', y: 80 }]";

        return dados;

    }

    function CarregaGraficoCodigoMenu() {
        var dataPointsParametro = [];

        $.getJSON('/Resultado/RetornaGraficoPorCodigoMenu/',
          {
              CodigoMenu: $("#CodigoMenu").val()
          },
         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPointsParametro.push({ label: EmpData.DescricaoParametro1, y: EmpData.PercentualAcertoExame });
                 //dataPoints.push({ label: '15/01', y: 10 });D
                 DescricaoExameParametro = EmpData.DescricaoExame;
             })
             CarregaGraficoParametroCodigoMenu(2, dataPointsParametro);
         });

    }

    function CarregaGraficoParametroCodigoMenu(CodigoMenu, dataPoints) {

        var NomeDiv = "chartContainer" + CodigoMenu;
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);


        var chart = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame,
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
        chart.render();
    }

    function CarregaSelectExame() {

        var option = "";

        $.getJSON('/Resultado/RetornaExames/', {

        },
          function (json) {

              $.each(json, function (i, EmpData) {


                  option = option + "<option value='" + EmpData.CodigoExame + "'>" + EmpData.DescricaoExame + "</option>";


              });//each
              $('#SelectExame').append(option);
          });//GetJason

    }

    function CarregaGraficoExameParametro() {
        var dataPointsParametro = [];

        $.getJSON('/Resultado/RetornaGraficoParametroExame/',
          {
              CodigoExame: 1,
              CodigoParametro: 1,
          },
         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPointsParametro.push({ label: EmpData.DescricaoParametro1, y: EmpData.PercentualAcertoExame });
                 //dataPoints.push({ label: '15/01', y: 10 });D
                 DescricaoExameParametro = EmpData.DescricaoExame;
             })
             CarregaGraficoParametro(2, dataPointsParametro);
         });

    }

    function CarregaGraficoParametro(CodigoMenu, dataPoints) {

        var NomeDiv = "chartContainer" + CodigoMenu;
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);


        var chart = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame,
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
                     type: "bar",
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

    function CarregaGraficoExame() {
        var dataPoints = [];

        $.getJSON('/Resultado/RetornaGraficoExame/',
          {
              CodigoAluno: 1,
          },
         function (json) {

             $.each(json, function (i, EmpData) {

                 dataPoints.push({ label: EmpData.DataExameFormatada, y: EmpData.PercentualAcertoExame });
                 //dataPoints.push({ label: '15/01', y: 10 });D
                 DescricaoExame = EmpData.DescricaoExame;
             })
             CarregaExame1(1, dataPoints);
         });

    }

    function CarregaExame1(CodigoMenu, dataPoints) {

        var NomeDiv = "chartContainer" + CodigoMenu;
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);


        var chart = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame,
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
        chart.render();
    }

    function CarregaExameParametro(CodigoMenu, dataPoints) {

        var NomeDiv = "chartContainerParametro" + CodigoMenu;
        var div = "<div id='" + NomeDiv + "'></div>";
        $("#DivInner").append(div);


        var chart2 = new CanvasJS.Chart(NomeDiv,
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Exame " + DescricaoExame,
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
                         chart2.render();
                     }
                 },
             });
        chart2.render();
    }

    $('#SelectExame').on('change', function () {
        CodigoNivel = 0;
        CarregaSelectNivel(this.value, 1);
        AjustaDropNivel();
    });


}(jQuery));