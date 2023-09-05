$(document).ready(function ($) {

    //Máscaras Dimensões
    $('#Peso').maskMoney({ thousands: '', decimal: '.' });
    $('#Comprimento').maskMoney({ thousands: '', decimal: '.' });
    $('#Largura').maskMoney({ thousands: '', decimal: '.' });
    $('#Altura').maskMoney({ thousands: '', decimal: '.' });

    //Máscaras Preço
    $('#PrecoPromocional').maskMoney({ thousands: '', decimal: '.' });
    $('#Preco').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoAmericanas').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoAmericanasApp').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoShoptime').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoShoptimeApp').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoSubmarino').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoSubmarinoApp').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoAmericanasEmpresas').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoAmericanas_VAR').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoAmericanasApp_VAR').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoShoptime_VAR').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoShoptimeApp_VAR').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoSubmarino_VAR').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoSubmarinoApp_VAR').maskMoney({ thousands: '', decimal: '.' });
    $('#PrecoAmericanasEmpresas_VAR').maskMoney({ thousands: '', decimal: '.' });

    //Canais
    $('#PrecoPromocional').keypress(function () {

        var x = document.getElementById("PrecoPromocional");

        var acom = document.getElementById("PrecoAmericanas");
        acom.value = x.value;

        var shop = document.getElementById("PrecoShoptime");
        shop.value = x.value;

        var suba = document.getElementById("PrecoSubmarino");
        suba.value = x.value;

        var emp = document.getElementById("PrecoAmericanasEmpresas");
        emp.value = x.value;

        var acom_app = document.getElementById("PrecoAmericanasApp");
        acom_app.value = x.value;

        var shop_app = document.getElementById("PrecoShoptimeApp");
        shop_app.value = x.value;

        var suba_app = document.getElementById("PrecoSubmarinoApp");
        suba_app.value = x.value;
    });

    $('#PrecoAmericanas').keypress(function () {

        var acom = document.getElementById("PrecoAmericanas");

        var shop = document.getElementById("PrecoShoptime");
        shop.value = acom.value;

        var suba = document.getElementById("PrecoSubmarino");
        suba.value = acom.value;

        var emp = document.getElementById("PrecoAmericanasEmpresas");
        emp.value = acom.value;

        var acom_app = document.getElementById("PrecoAmericanasApp");
        acom_app.value = acom.value;

        var shop_app = document.getElementById("PrecoShoptimeApp");
        shop_app.value = acom.value;

        var suba_app = document.getElementById("PrecoSubmarinoApp");
        suba_app.value = acom.value;
    });

    //Canais Variação
    $('#PrecoAmericanas_VAR').keypress(function () {

        var acom = document.getElementById("PrecoAmericanas_VAR");

        var shop = document.getElementById("PrecoShoptime_VAR");
        shop.value = acom.value;

        var suba = document.getElementById("PrecoSubmarino_VAR");
        suba.value = acom.value;

        var emp = document.getElementById("PrecoAmericanasEmpresas_VAR");
        emp.value = acom.value;

        var acom_app = document.getElementById("PrecoAmericanasApp_VAR");
        acom_app.value = acom.value;

        var shop_app = document.getElementById("PrecoShoptimeApp_VAR");
        shop_app.value = acom.value;

        var suba_app = document.getElementById("PrecoSubmarinoApp_VAR");
        suba_app.value = acom.value;
    });

    //Categorias

    CarregaGridCategorias();

    function CarregaGridCategorias() {

        var selectCategoria = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoMvp/BuscarCategorias/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {


                    if (EmpData.CodigoCategoria == $('#CodigoCategoria').val()) {

                        selectCategoria = selectCategoria + "<option selected value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";
                    } else {

                        selectCategoria = selectCategoria + "<option value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";


                    }

                })
                $('#SelectCategoria').append(selectCategoria);
            }
        });

    }

    $('#SelectCategoria').change(function () {

        CarregaGridSubCategorias(this.value);
    });

    function CarregaGridSubCategorias(Codigo) {

        $('#SelectSubCategoria').empty();

        var selectSubCategoria = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoB2W_V2/BuscarSubCategorias/",
            data: { CodigoCategoria: Codigo },
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.CodigoSubCategoria + "'>" + EmpData.DescricaoSubCategoria + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.CodigoSubCategoria + "'>" + EmpData.DescricaoSubCategoria + "</option>";

                    }

                })
                $('#SelectSubCategoria').append(selectSubCategoria);
            }
        });

    }
});