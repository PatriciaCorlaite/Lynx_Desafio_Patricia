$(document).ready(function ($) {

    // Máscaras Formatação Preço (Tela Precificação e Cadastro)
    $('#PrecoDe').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoPor').maskMoney({ thousands: '', decimal: '.' });


    // Máscaras Formatação Preço (Tela Precificação)
    $('#PrecoCB').maskMoney({ thousands: '', decimal: '.' });
    $('#OfertaCB').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoEX').maskMoney({ thousands: '', decimal: '.' });
    $('#OfertaEX').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoPF').maskMoney({ thousands: '', decimal: '.' });
    $('#OfertaPF').maskMoney({ thousands: '', decimal: '.' });


    // Máscaras Formatação Dimensões (Tela Cadastro)
    $('#altura').maskMoney({ thousands: '', decimal: '.' });
    $('#largura').maskMoney({ thousands: '', decimal: '.' });
    $('#profundidade').maskMoney({ thousands: '', decimal: '.' });
    $('#peso').maskMoney({ thousands: '', decimal: '.' });


    // Preenchimento Automático PREÇO DE (Tela Precificação)
    $('#PrecoCB').keypress(function () {

        var x = document.getElementById("PrecoCB");

        var precoEX = document.getElementById("PrecoEX");
        precoEX.value = x.value;

        var precoPF = document.getElementById("PrecoPF");
        precoPF.value = x.value;
    });


    // Preenchimento Automático PREÇO POR (Tela Precificação)
    $('#OfertaCB').keypress(function () {

        var x = document.getElementById("OfertaCB");

        var ofertaEX = document.getElementById("OfertaEX");
        ofertaEX.value = x.value;

        var ofertaPF = document.getElementById("OfertaPF");
        ofertaPF.value = x.value;
    });

    // Categorias
    $('#SelectDepartamento').change(function () {

        CarregarCategorias(this.value);
    });

    function CarregarCategorias(Codigo) {

        $('#SelectCategoria').empty();
        $('#SelectSubCategoria').empty();

        var categoria = categoria + "<option value=''>Selecione...</option>";

        $.ajax({
            type: "GET",
            url: "/ProdutoVia_V2/BuscarCategorias/",
            data: { CodDepto: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    categoria = categoria + "<option value='" + EmpData.CodCateg + "'>" + EmpData.Categ + "</option>";

                })

                $('#SelectCategoria').append(categoria);
            }
        });

    }

    // SubCategorias
    $('#SelectCategoria').change(function () {

        CarregarSubCategorias(this.value);
    });

    function CarregarSubCategorias(Codigo) {

        $('#SelectSubCategoria').empty();

        var sub = "<option value=''>Selecione...</option>";

        $.ajax({
            type: "GET",
            url: "/ProdutoVia_V2/BuscarSubCategorias/",
            data: { CodCateg: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    sub = sub + "<option value='" + EmpData.CodSub + "'>" + EmpData.SubCateg + "</option>";

                })

                $('#SelectSubCategoria').append(sub);
            }
        });
    }



});