(function ($) {

    
    //Page Load
   /* window.onload = function () {
      
    }
    
    function Buscar() {
        var tr;
        $.getJSON('/Acesso/VerificaUsuario/',
           {
               Login: $('#Login').val(),
               Senha: $('#Senha').val(),
           },
          function (json) {
              
              $.each(json, function (i, EmpData) {
                  if (EmpData.DescricaoMensagem.indexOf('Sucesso') > -1)
                  {
                      
                      window.location = "/Resultado/index/";
                  }
                 
                  else {
                      
                      $("#DivInner").html("<div class='alert alert-danger' id='DivMensagemSucesso'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>X</button>" + EmpData.DescricaoMensagem + "</div>");
                      $('#DivInner').show();
                      $('#DivVoltar').show();
                  }
              })

          });
    }

    function Validar() {

        if($('#Login').val()==""){

        }
        if($('#Senha').val()==""){


        }
       
        return true;
    }
       
    $("#btnEntrar").click(function () {

        Buscar();

    });

    $("#btnConsultaMini").click(function () {

        Buscar();

    });*/
    
 
    
}(jQuery));