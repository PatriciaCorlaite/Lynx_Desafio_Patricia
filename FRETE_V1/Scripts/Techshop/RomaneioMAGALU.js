$(document).ready(function () {
    const hoje = new Date();
    document.getElementById("DtEmbarque").value = TratamentoDt(hoje);
});

function TratamentoDt(d) {
    let dia = d.getDate();
    let mes = d.getMonth() + 1;
    let ano = d.getFullYear();
    if (dia < 10) {
        dia = "-0" + dia;
    } else {
        dia = "-" + dia;
    }
    if (mes < 10) {
        mes = "-0" + mes;
    } else {
        mes = "-" + mes;
    }
    let data = ano + mes + dia;
    return data;
}

function BuscarBarCodes() {
    const DtEmbarque = document.getElementById("DtEmbarque").value;
    $("#codeBars").html("Carregando...");
    $.ajax({
        type: "GET",
        url: "/Ferramentas/QntPaginas?data=" + DtEmbarque,
        success: function (QntPaginas) {
            for (let i = 0; i < QntPaginas; i++) {
                $.ajax({
                    type: "GET",
                    url: "/Ferramentas/ListarEtiquetas?data=" + DtEmbarque + "&pagina=" + i,
                    success: function (lista) {
                        lista.forEach(BarCode);
                    }
                });
            }
            $("#codeBars").html("");
        }
    });
};

function BarCode(item) {
    let text = item;
    if (text.indexOf("^FS^BY4^FO42,370^BCN,125,Y,Y^FD") > 1) {
        let find = text.indexOf("^FS^BY4^FO42,370^BCN,125,Y,Y^FD");
        find += 31;
        code = find + 13;
        let result = text.slice(find, code);
        document.getElementById("codeBars").innerHTML += result + ", ";
    }
    else if (text.indexOf("^FS^FS^FO70,570^BY3^B3N,N,250,Y,N^FD") > 1) {
        let find = text.indexOf("^FS^FS^FO70,570^BY3^B3N,N,250,Y,N^FD");
        find += 36;
        code = find + 12;
        let result = text.slice(find, code);
        document.getElementById("codeBars").innerHTML += result + ", ";
    }
}

function Copiar() {
    var texto = document.getElementById("codeBars");
    texto.select();
    document.execCommand("copy");
}