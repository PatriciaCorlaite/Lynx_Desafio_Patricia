$(document).ready(function () {
    
  
    BuscarProjecaoVendas();

    BuscarPedidosLojas();

    BuscarRomaneios();

    BuscarEstado();

    BuscarSituacaoTransportadoras();

    BuscarFilial8();
       

    function BuscarPedidosLojas()
    {
        

        var dataPoints = [];
        var dataPoints2 = [];
        var dataPoints3 = [];
        var dataPoints4 = [];
        var dataPoints5 = [];
        var dataPoints6 = [];
        var dataPoints7 = [];
        var dataPoints8 = [];
        var dataPoints9 = [];
        var dataPoints10 = [];
        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarPedidosLojas/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {
                                       
                    dataPoints.push({ label: EmpData.Data, y: EmpData.Dotz });
                    dataPoints2.push({ label: EmpData.Data, y: EmpData.Mpv });
                    dataPoints3.push({ label: EmpData.Data, y: EmpData.DiretoComVoce });
                    dataPoints4.push({ label: EmpData.Data, y: EmpData.BancoInter });
                    dataPoints5.push({ label: EmpData.Data, y: EmpData.Amazon });
                    dataPoints6.push({ label: EmpData.Data, y: EmpData.ViaVarejo });
                    dataPoints7.push({ label: EmpData.Data, y: EmpData.Magalu });
                    dataPoints8.push({ label: EmpData.Data, y: EmpData.Carrefour });
                    dataPoints9.push({ label: EmpData.Data, y: EmpData.Shopee });                    
                    dataPoints10.push({ label: EmpData.Data, y: EmpData.Total });
                  
                                  
                })
             
                CarregaDadosLojas(dataPoints, dataPoints2, dataPoints3, dataPoints4, dataPoints5, dataPoints6, dataPoints7, dataPoints8, dataPoints9, dataPoints10);
            }
        });
     }

    function CarregaDadosLojas(dataPoints, dataPoints2, dataPoints3, dataPoints4, dataPoints5, dataPoints6, dataPoints7, dataPoints8, dataPoints9, dataPoints10) {

        

        var chart = new CanvasJS.Chart('chartContainer8',
             {

                 title: {
                     text: "Pedidos Integrados Por Loja",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 4000,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                    {
                        type: "line",
                        name: "",
                        legendText: "MPV",
                        showInLegend: true,
                        dataPoints: dataPoints2
                    },
                 {
                     type: "line",
                     name: "",
                     legendText: "Mercado Livre",
                     showInLegend: true,
                     dataPoints: dataPoints3
                 },
                 {
                     type: "line",
                     name: "",
                     legendText: "Amazon",
                     showInLegend: true,
                     dataPoints: dataPoints5
                 }
                 ,
                 {
                     type: "line",
                     name: "",
                     legendText: "Via Varejo",
                     showInLegend: true,
                     dataPoints: dataPoints6
                 }
                 ,
                 {
                     type: "line",
                     name: "",
                     legendText: "Magalu",
                     showInLegend: true,
                     dataPoints: dataPoints7
                 },
                 {
                     type: "line",
                     name: "",
                     legendText: "Shopee",
                     showInLegend: true,
                     dataPoints: dataPoints9
                 },
                 {
                     type: "line",
                     name: "",
                     legendText: "Carrefour",
                     showInLegend: true,
                     dataPoints: dataPoints8
                 },
                 {
                     type: "line",
                     name: "",
                     legendText: "BancoInter",
                     showInLegend: true,
                     dataPoints: dataPoints4
                 }                 
                 ,
                 {
                     type: "line",
                     name: "",
                     legendText: "Dotz",
                     showInLegend: true,
                     dataPoints: dataPoints
                 }
                 ,
                 {
                     type: "line",
                     name: "",
                     legendText: "Total Pedidos Aprovados",
                     showInLegend: true,
                     dataPoints: dataPoints10
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
    
    function BuscarProjecaoFaturamento() {


        var dataPoints = [];
        var dataPoints2 = [];
        var dataPoints3 = [];
        var dataPoints4 = [];
        var MesAtual = "";
        var MesAnterior = "";
        var MesMaisAnterior = "";
        var MesAnoAnterior = "";
        var TotalPedidos = "";

        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarProjecaoFaturamento/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    dataPoints.push({ x: EmpData.Dia, y: EmpData.MesAnterior });
                    dataPoints2.push({ x: EmpData.Dia, y: EmpData.MesAtual });
                    dataPoints3.push({ x: EmpData.Dia, y: EmpData.MetaMes });
                    dataPoints4.push({ x: EmpData.Dia, y: EmpData.MesAnoAnterior});
                    MesAtual = EmpData.NomeMesAtual;
                    MesAnterior = EmpData.NomeMesAnterior;
                    MesMaisAnterior = EmpData.Transportadora;
                    MesAnoAnterior = EmpData.NomeMesAnoAnterior;
                    TotalPedidos = EmpData.TotalPedidos;

                })
               
                var Resultado = parseFloat(TotalPedidos);
                var num = 'R$ ' + Resultado.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                $("#DivProjecaoFaturamento").html("<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeção Faturamento para " + MesAnterior + " <strong>" + num + "</strong> Reais</h4>");


                CarregaProjecaoFaturamento(dataPoints4, MesAnoAnterior, dataPoints, dataPoints2, dataPoints3, MesAtual, MesAnterior, MesMaisAnterior);
            }
        });
    }

    function CarregaProjecaoFaturamento(dataPoints4, MesAnoAnterior, dataPoints, dataPoints2, dataPoints3, MesAtual, MesAnterior, MesMaisAnterior) {

        var chart = new CanvasJS.Chart('chartContainer7',
             {

                 title: {
                     text: "Projeção de Faturamento Bruto",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum:40000000,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                     {
                         type: "line",
                         name: "",
                         legendText: 'Meta Mês',
                         showInLegend: true,
                         dataPoints: dataPoints3
                     },
                 {
                     type: "line",
                     name: "",
                     legendText: MesAnterior,
                     showInLegend: true,
                     dataPoints: dataPoints
                 },
                    {
                        type: "line",
                        name: "",
                        legendText: MesAtual,
                        showInLegend: true,
                        dataPoints: dataPoints2
                    },
                    {
                        type: "line",
                        name: "",
                        legendText: MesAnoAnterior,
                        showInLegend: true,
                        dataPoints: dataPoints4
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
    
    function BuscarProjecaoVendas() {


        var dataPoints = [];
        var dataPoints2 = [];
        var dataPoints3 = [];
        var MesAtual="";
        var MesAnterior = "";
        var MesMaisAnterior = "";
        var TotalPedidos = "";

        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarProjecaoVendas/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                 
                    dataPoints.push({ x:EmpData.IndicadorEnvioSmsFaturado, y: EmpData.IndicadorDataPrometida });
                    dataPoints2.push({ x: EmpData.IndicadorEnvioSmsFaturado, y: EmpData.IndicadorEnvioSmsEntregue });
                    dataPoints3.push({ x: EmpData.IndicadorEnvioSmsFaturado, y: EmpData.IndicadorEntregueTransportadora });
                    MesAtual = EmpData.NumeroEntrega;
                    MesAnterior = EmpData.StatusMarketplace;
                    MesMaisAnterior = EmpData.Transportadora;
                    TotalPedidos = EmpData.IndicadorEnvioConhecimentoTranspTotal;

                })  
                $("#DivProjecao").html("<h4>Projeção Vendas para " + MesAnterior + " <strong>" + TotalPedidos + "</strong> Pedidos</h4>");
                
          
                CarregaProjecaoVendas(dataPoints, dataPoints2,dataPoints3, MesAtual, MesAnterior,MesMaisAnterior);
            }
        });
    }

    function CarregaProjecaoVendas(dataPoints, dataPoints2, dataPoints3, MesAtual, MesAnterior, MesMaisAnterior) {

        var chart = new CanvasJS.Chart('chartContainer6',
             {

                 title: {
                     text: "Projeção de Vendas",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 50000,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                    /* {
                         type: "bar",
                         name: "",
                         legendText: "Meta Outubro",
                         showInLegend: true,
                         dataPoints: dataPoints3
                     },*/
                 {
                     type: "line",
                     name: "",
                     legendText: MesAtual,
                     showInLegend: true,
                     dataPoints: dataPoints
                 },
                    {
                        type: "line",
                        name: "",
                        legendText: MesAnterior,
                        showInLegend: true,
                        dataPoints: dataPoints2
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

    function BuscarFilial8() {


        var dataPoints = [];
        var dataPoints2 = [];
        var dataPoints3 = [];
        var dataPoints4 = [];
        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarPedidosFilial8/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    dataPoints.push({ label: EmpData.NumeroEntrega, y: EmpData.IndicadorDataPrometida });
                    dataPoints2.push({ label: EmpData.NumeroEntrega, y: EmpData.IndicadorEnvioSmsEntregue });
                    dataPoints3.push({ label: EmpData.NumeroEntrega, y: EmpData.IndicadorLeitura });
                    dataPoints4.push({ label: EmpData.NumeroEntrega, y: EmpData.IndicadorEnvioConhecimentoTranspJadlog });
                    
                })
             
                CarregaDadosGraficoFilial8(dataPoints, dataPoints2, dataPoints3, dataPoints4);
            }
        });
    }
    
    function CarregaDadosGraficoFilial8(dataPoints, dataPoints2, dataPoints3, dataPoints4) {

       
        var chart = new CanvasJS.Chart('chartContainer5',
             {
                 
                 title: {
                     text: "Pedidos Faturados Filial 8 Últimos 30 dias",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 1500,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                 {
                     type: "line",
                     name: "",
                     legendText: "Integrados",
                     showInLegend: true,
                     dataPoints: dataPoints
                 },
                    {
                    type: "line",
                    name: "",
                    legendText: "Faturados",
                    showInLegend: true,
                    dataPoints: dataPoints2
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
        
    if ($('#Permissao').val() == "ADMINISTRADOR") {
        BuscarFaturamento();
        BuscarProjecaoFaturamento();
    }

    function BuscarFaturamento() {


        var dataPoints = [];
        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarFaturamento/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    dataPoints.push({ label: EmpData.NumeroEntrega, y: EmpData.ValorNota });

                })

                CarregaDadosGraficoFaturamento(dataPoints);
            }
        });
    }
    
    function CarregaDadosGraficoFaturamento(dataPoints) {



        var chart = new CanvasJS.Chart('chartContainer4',
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Faturamento Últimos 30 dias",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 600000,
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


        chart.render();
    }
    
    function BuscarSituacaoTransportadoras() {


        var dataPoints2 = [];
        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarSituacaoTransportadoras/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    dataPoints2.push({ label: EmpData.status, y: EmpData.total });
                   
                    if (EmpData.TotalPedidosEntregues != 0)
                    {
                        $('#PedidosEntregues').text(EmpData.TotalPedidosEntregues);
                        
                    }
                })

                CarregaDadosGraficoSituacaoTranportadoras(dataPoints2);
            }
        });
    }

    function CarregaDadosGraficoSituacaoTranportadoras(dataPoints) {



        var chart = new CanvasJS.Chart("chartContainer3", {
            title: {
                text: "Situação Pedidos Jadlog últimos 60 dias"
            },
            data: [{
                type: "column",
                dataPoints:dataPoints
                
            }]
        });
        chart.render();


      /*  var chart = new CanvasJS.Chart('chartContainer3',
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Situação Pedidos Jadlog últimos 60 dias",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 3500,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                 {   type: "stackedColumn",
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
             */

        chart.render();
    }
    
    function BuscarEstado() {


        var dataPoints = [];
        var flag = 0;
        $.ajax({
            type: "GET",
            url: "/Principal/BuscarEstado/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    dataPoints.push({ label: EmpData.NumeroEntrega, y: EmpData.IndicadorDataPrometida });

                })

                CarregaDadosGraficoEstado(dataPoints);
            }
        });
    }
    
    function CarregaDadosGraficoEstado(dataPoints) {



        var chart = new CanvasJS.Chart('chartContainer2',
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Pedidos Faturados Estado Últimos 30 dias",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 3500,
                 },
                 axisY2: {
                     title: ""
                 },
                 data: [
                 {


                    

                     type: "pie",
                    
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
    
    function BuscarRomaneios() {
          
      
         var dataPoints = [];
         var flag = 0;
         $.ajax({
             type: "GET",
             url: "/Principal/BuscarCategorias/",
             dataType: "json",
             success: function (json) {
                 $.each(json, function (i, EmpData) {

                    dataPoints.push({ label: EmpData.NumeroEntrega, y: EmpData.IndicadorDataPrometida });
                
                 })

                     CarregaDadosGraficoAlunosExame(dataPoints);
             }
         });
     }
       
    function CarregaDadosGraficoAlunosExame(dataPoints) {

     

        var chart = new CanvasJS.Chart('chartContainer1',
             {
                 theme: "theme3",
                 animationEnabled: true,
                 title: {
                     text: "Pedidos Faturados Últimos 30 dias",
                     fontSize: 30
                 },
                 toolTip: {
                     shared: true
                 },
                 axisY: {
                     title: "",
                     maximum: 2300,
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
       
       
        chart.render();
    }
  
});

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
                teste += "<th>" + myJSON[i].Entrega + "</th>";
                teste += "<th>" + myJSON[i].Importacao + "</th>";
                teste += "<th>" + myJSON[i].Status + "</th>";
                teste += "<th>" + myJSON[i].Erro + "</th>";
                teste += "<th>" + myJSON[i].StatusMarketplace + "</th>";
                teste += "<th>" + myJSON[i].Etiqueta + "</th>";
                teste += "</tr>";
            }
            teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
            $("#NaoEnviadosMAGALU").html(teste);
        }
    });

    $("#BtnNaoEnviadosMAGALU").click(function () {
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
                    teste += "<th>" + myJSON[i].Entrega + "</th>";
                    teste += "<th>" + myJSON[i].Importacao + "</th>";
                    teste += "<th>" + myJSON[i].Status + "</th>";
                    teste += "<th>" + myJSON[i].Erro + "</th>";
                    teste += "<th>" + myJSON[i].StatusMarketplace + "</th>";
                    teste += "<th>" + myJSON[i].Etiqueta + "</th>";
                    teste += "</tr>";
                }
                teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
                $("#NaoEnviadosMAGALU").html(teste);
            }
        });
    });
});

$(document).ready(function () {
    $("#NaoEnviadosMELI").html("<tr><td>Carregando...</td></tr>");
    $.ajax({
        type: "GET",
        url: "/TESTES/NaoEnviadosMELI/",
        dataType: "json",
        success: function (resultado) {
            const myJSON = resultado;
            let teste = "";
            for (let i = 0; i < myJSON.length; i++) {
                teste += "<tr>";
                teste += "<th>" + myJSON[i].Entrega + "</th>";
                teste += "<th>" + myJSON[i].Importacao + "</th>";
                teste += "<th>" + myJSON[i].Status + "</th>";
                teste += "<th>" + myJSON[i].Erro + "</th>";
                teste += "<th>" + myJSON[i].StatusMarketplace + "</th>";
                teste += "<th>" + myJSON[i].Etiqueta + "</th>";
                teste += "</tr>";
            }
            teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
            $("#NaoEnviadosMELI").html(teste);
        }
    });

    $("#BtnNaoEnviadosMELI").click(function () {
        $("#NaoEnviadosMELI").html("<tr><td>Carregando...</td></tr>");
        $.ajax({
            type: "GET",
            url: "/TESTES/NaoEnviadosMELI/",
            dataType: "json",
            success: function (resultado) {
                const myJSON = resultado;
                let teste = "";
                for (let i = 0; i < myJSON.length; i++) {
                    teste += "<tr>";
                    teste += "<th>" + myJSON[i].Entrega + "</th>";
                    teste += "<th>" + myJSON[i].Importacao + "</th>";
                    teste += "<th>" + myJSON[i].Status + "</th>";
                    teste += "<th>" + myJSON[i].Erro + "</th>";
                    teste += "<th>" + myJSON[i].StatusMarketplace + "</th>";
                    teste += "<th>" + myJSON[i].Etiqueta + "</th>";
                    teste += "</tr>";
                }
                teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
                $("#NaoEnviadosMELI").html(teste);
            }
        });
    });
});

$(document).ready(function () {
    $("#NaoEnviadosSHOPEE").html("<tr><td>Carregando...</td></tr>");
    $.ajax({
        type: "GET",
        url: "/TESTES/NaoEnviadosSHOPEE/",
        dataType: "json",
        success: function (resultado) {
            const myJSON = resultado;
            let teste = "";
            for (let i = 0; i < myJSON.length; i++) {
                teste += "<tr>";
                teste += "<th>" + myJSON[i].Entrega + "</th>";
                teste += "<th>" + myJSON[i].Importacao + "</th>";
                teste += "<th>" + myJSON[i].Status + "</th>";
                teste += "<th>" + myJSON[i].Erro + "</th>";
                teste += "<th>" + myJSON[i].StatusMarketplace + "</th>";
                teste += "<th>" + myJSON[i].Etiqueta + "</th>";
                teste += "</tr>";
            }
            teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
            $("#NaoEnviadosSHOPEE").html(teste);
        }
    });

    $("#BtnNaoEnviadosSHOPEE").click(function () {
        $("#NaoEnviadosSHOPEE").html("<tr><td>Carregando...</td></tr>");
        $.ajax({
            type: "GET",
            url: "/TESTES/NaoEnviadosSHOPEE/",
            dataType: "json",
            success: function (resultado) {
                const myJSON = resultado;
                let teste = "";
                for (let i = 0; i < myJSON.length; i++) {
                    teste += "<tr>";
                    teste += "<th>" + myJSON[i].Entrega + "</th>";
                    teste += "<th>" + myJSON[i].Importacao + "</th>";
                    teste += "<th>" + myJSON[i].Status + "</th>";
                    teste += "<th>" + myJSON[i].Erro + "</th>";
                    teste += "<th>" + myJSON[i].StatusMarketplace + "</th>";
                    teste += "<th>" + myJSON[i].Etiqueta + "</th>";
                    teste += "</tr>";
                }
                teste += "<tr><td>Pedidos: " + myJSON.length + "</td></tr>";
                $("#NaoEnviadosSHOPEE").html(teste);
            }
        });
    });
});