var data = 0;

const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const months = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const d = new Date();

$(document).ready(function () {
    return outroMes(0);
});

function outroMes(p1) {

    data += p1;

    let itemCalendar = "";

    $("#teste").html("<tr><td>Carregando...</td></tr>");

    let ultimoDiaMes = new Date(d.getFullYear(), (d.getMonth() + 1) + data, 0);
    let primeiroDiaMes = new Date(d.getFullYear(), d.getMonth() + data, 1);

    $("#title_calendar").html('<h2 class="card-title text-center">' + months[primeiroDiaMes.getMonth() + 1] + "/ " + primeiroDiaMes.getFullYear() + '</h2>');

    const ultimo = ultimoDiaMes.getDate();
    const primeiro = primeiroDiaMes.getDay();

    let dia = 1;
    let contDia = 1;

    itemCalendar += '<thead><tr>';
    for (let i = 0; i < days.length; i++) {
        itemCalendar += '<th width="14%" class="text-center">' + days[i] + '</th>';
    }
    itemCalendar += '</tr></thead>';

    $.ajax({
        type: "GET",
        url: "/Calendar/ListarLembretes/",
        dataType: "json",
        success: function (lista) {
            let m = 0;
            itemCalendar += '<tbody>';
            for (let j = 0; j < (ultimoDiaMes.getDate() / 5); j++) {
                itemCalendar += '<tr>';
                for (let i = 0; i < days.length; i++) {
                    if (primeiro < contDia && dia <= ultimo) {
                        itemCalendar += '<td data-title="' + days[i] + '" class="text-center" style="height:100px">';
                        itemCalendar += '<p>' + dia + '</p>';
                        let l = 0;
                        let tag = '';
                        for (let k = 0; k < lista.length; k++) {
                            if (lista[k].Ativo == 1) {
                                const dtc = new Date(lista[k].DtInicio);
                                let dtdb = new Date(d.getFullYear(), d.getMonth() + data, dia);
                                if (dtc.getDate() == dtdb.getDate() && dtc.getMonth() == dtdb.getMonth() && dtc.getFullYear() == dtdb.getFullYear()) {
                                    tag += '<button style="max-width: 150px; max-height: 24px;" class="mb-1 mt-1 me-1 btn btn-xs btn-primary" onclick="detalhe(\'' + lista[k].Categoria + '\',\'' + lista[k].DtInicio + '\',\'' + lista[k].HrInicio + '\',\'' + lista[k].HrFim + '\',\'' + lista[k].Titulo + '\',\'' + lista[k].Descricao + '\',\'' + lista[k].Participantes + '\',' + lista[k].Codigo + ',\'' + lista[k].SalaReuniao + '\')">' + lista[k].HrInicio + ' ' + lista[k].Categoria + '</button><br>';
                                    l++;
                                    m++;
                                }
                            }
                        }
                        if (l != 0) {
                            itemCalendar += '<div style="float:left">';
                            itemCalendar += tag;
                            itemCalendar += '</div>';
                        }
                        itemCalendar += '</td>';
                        dia++;
                    } else {
                        itemCalendar += '<td class="text-end"></td>';
                    }
                    contDia++;
                }
                itemCalendar += '</tr >';
            }
            itemCalendar += '</tbody>';
            $("#notificacoes").html(m);
            $("#teste").html(itemCalendar);
        }
    });
};

function detalhe(Categoria, DtInicio, HrInicio, HrFim, Titulo, Descricao, Participantes, Codigo, Sala) {
    document.getElementById("detalhe").style.zIndex = "999999";
    document.getElementById("detalhe").style.backgroundColor = "#77777782";
    let dtd = new Date(DtInicio);
    let itemDetalhe = '';
    itemDetalhe += '<br>';
    itemDetalhe += '<br>';
    itemDetalhe += '<br>';
    itemDetalhe += '<br>';
    itemDetalhe += '<br>';
    itemDetalhe += '<div class="row">';
    itemDetalhe += '<div class="col-md-12 col-lg-6 col-xl-4 offset-lg-3 offset-xl-4">';
    itemDetalhe += '<div class="card card-modern card-featured card-featured-primary">';
    itemDetalhe += '<div class="card-header">';
    itemDetalhe += '<div class="card-actions">';
    itemDetalhe += '<button type="submit" class="btn fa-input" title="Excluir lembrete"><i class="el el-trash"></i></button>';
    itemDetalhe += '<a href="#" class="card-action card-action-dismiss" onclick="fecharDetalhe()"></a>';
    itemDetalhe += '</div>';
    itemDetalhe += '<h4>' + Categoria + '</h4>';
    itemDetalhe += '</div>';
    itemDetalhe += '<div class="card-body">';
    itemDetalhe += '<p>Dia ' + dtd.getDate() + ' de ' + months[dtd.getMonth()+1] + '</p>';
    itemDetalhe += '<p>Das ' + HrInicio + 'hrs às ' + HrFim + 'hrs </p>';
    itemDetalhe += '<table>';
    if (Sala > 0) {
        itemDetalhe += '<tr><td><h5><b>Sala: </b></h5></td><td><h5> ' + Sala + 'º Andar</h5></td></tr>';
    }
    itemDetalhe += '<tr><td><h5><b>Titulo: </b></h5></td><td><h5> ' + Titulo + '</h5></td></tr>';
    itemDetalhe += '<tr><td><h5><b>Descricao: </b></h5></td><td><h5> ' + Descricao + '</h5></td></tr>';
    itemDetalhe += '<tr><td><h5><b>Participantes: </b></h5></td><td><h5> ' + Participantes + '</h5></td></tr>';
    itemDetalhe += '</table>';
    itemDetalhe += '</div>';
    itemDetalhe += '</div>';
    itemDetalhe += '</div>';
    itemDetalhe += '</div>';
    document.getElementById("excluirLembrete").value = Codigo;
    $("#detalhe").html(itemDetalhe);
}

function fecharDetalhe() {
    document.getElementById("detalhe").style.zIndex = "-999999";
    document.getElementById("detalhe").style.backgroundColor = "#77777700";
    $("#detalhe").html('');
}

function horarioCerto() {
    HrFim = parseInt(document.getElementById("HrFim").value.replace(":", ""));
    HrInicio = parseInt(document.getElementById("HrInicio").value.replace(":", ""));

    if (HrInicio > HrFim) {
      document.getElementById("HrFim").value = document.getElementById("HrInicio").value;
    }
}

$(document).keyup(function (e) {
    horarioCerto();
    if (e.key === "Escape") {
        return fecharDetalhe();
    }
});

function categoria(Permissao) {
    let itemSala = '';
    if (document.getElementById("Categoria").value == "Reuniao" && Permissao == "ADMINISTRADOR") {
        itemSala += '<div class="radio-custom radio-primary">';
        itemSala += '<input type="radio" id="sala1" name="Sala" value="1" required>';
        itemSala += '<label for="sala1">Sala 1º Andar</label>';
        itemSala += '</div>';
        itemSala += '<div class="radio-custom radio-primary">';
        itemSala += '<input type="radio" id="sala2" name="Sala" value="2" required>';
        itemSala += '<label for="sala2">Sala 2º Andar</label>';
        itemSala += '</div>';
    }
    $("#sala").html(itemSala);
}