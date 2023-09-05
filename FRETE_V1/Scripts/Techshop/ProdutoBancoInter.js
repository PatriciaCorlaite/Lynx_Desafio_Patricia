$(document).ready(function ($) {

    CarregaGridCategorias();

    function CarregaGridSubCategorias(Codigo) {

        $('#SelectSubCategoria').empty();

        var selectSubCategoria = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoMvp/BuscarSubCategorias/",
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

    function CarregaGridCategorias() {
      
        var selectCategoria = "";
        $.ajax({
            type: "GET",
            url: "/ProdutoPrime/BuscarCategorias/",
            dataType: "json",
            success: function (json) {
                              
                $.each(json, function (i, EmpData) {

                    selectCategoria = selectCategoria + "<option selected value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";
                    
                })
                $('#SelectCategoria').append(selectCategoria);
            }
        });

    }
});    
    

