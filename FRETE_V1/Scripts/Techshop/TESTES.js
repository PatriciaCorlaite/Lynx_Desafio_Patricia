/*
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/TESTES/IndicadorTESTES/",
        dataType: "json",
        success: function (resultado) {
            $("#div1").text(resultado);
        }
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/TESTES/NaoEnviadoSerraPark/",
        dataType: "json",
        success: function (resultado) {
            const myJSON = resultado;
            let teste = "";
            for (let i = 0; i < myJSON.length; i++) {
                teste += "<tr>";
                teste += "<td>" + myJSON[i].Entrega + "</td>";
                teste += "<td>" + myJSON[i].Importacao + "</td>";
                teste += "<td>" + myJSON[i].Status + "</td>";
                teste += "<td>" + myJSON[i].Erro + "</td>";
                teste += "<td>" + myJSON[i].StatusMarketplace + "</td>";
                teste += "<td>" + myJSON[i].Etiqueta + "</td>";
                teste += "</tr>";
            }
            $("#div2").html(teste);
        }
    });
});
*/
$(document).ready(function () {
    $("#NaoEnviadosMAGALU").html("<tr><td>Carregando...</td></tr>");
    $.ajax({
        type: "GET",
        url: "/TESTES/NaoEnviadosMAGALU/",
        dataType: "json",
        success: function (resultado) {
            const myJSON = resultado;
            let teste = "";
            for (let i = 0; i < myJSON.length; i++) {
                teste += "<tr>";
                teste += "<th>" + myJSON[i].NomeTransportadora + "</th>";
                teste += "</tr>";
            }
            teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
            $("#NaoEnviadosMAGALU").html(teste);
        }
    });

});

/*
$(document).ready(function () {

    ChartTESTES();       

    function ChartTESTES()
    {

        var dataPoints1 = [];
        var dataPoints2 = [];
        var dataPoints3 = [];

        $.ajax({
            type: "GET",
            url: "/TESTES/ChartTESTES/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {
                                       
                    dataPoints1.push({ label: EmpData.Data, y: EmpData.Dado1 });
                    dataPoints2.push({ label: EmpData.Data, y: EmpData.Dado2 });
                    dataPoints3.push({ label: EmpData.Data, y: EmpData.Dado3 });                  
                                  
                })
             
                CarregaDadosLojas(dataPoints1, dataPoints2, dataPoints3);
            }
        });
     }

    function CarregaDadosLojas(dataPoints1, dataPoints2, dataPoints3) {

        

        var chart = new CanvasJS.Chart('ChartTESTES',
             {

                 title: {
                     text: "TESTES CHARTS",
                     fontSize: 22
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
                         legendText: "Dado1",
                         showInLegend: true,
                         dataPoints: dataPoints1
                     },
                     {
                         type: "line",
                         name: "",
                         legendText: "Dado2",
                         showInLegend: true,
                         dataPoints: dataPoints2
                     },
                     {
                         type: "line",
                         name: "",
                         legendText: "Dado3",
                         showInLegend: true,
                         dataPoints: dataPoints3
                     },
                  
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
  
 });*/