$(function () {

   
    window.onload = function () {
       
       
       //EscreveMenu();
        //CarregaMenu();
    }

 

    function EscreveMenu() {
       
        var html ="  <li class='nav-parent'> ";
        html = html + "  <a>teste</a> ";
        html = html + "  <ul class='nav nav-children'> ";
        html = html + "	 <li class='nav-parent'> ";
        html = html + "		<a>PMP - Processo</a> ";
        html = html + "		<ul class='nav nav-children'> ";
        html = html + "			<li> ";
        html = html + "				<a href='/Prova/Index/?CodigoMenu=3&CodigoUsuario=1'>Aquisições</a> ";
        html = html + "			</li> ";
        html = html + "		</ul> ";
        html = html + "	</li> ";
        html = html + " </ul> ";
        html = html + " </li> ";
        $('#MenuDinamico').append(html); 
                                      
                                            
    }



   function CarregaMenu() {

        var html='';
          $.getJSON('/Home/RetornaMenu/',
           {
               CodigoEmpresa: 1
           },
          function (json) {
              
              $.each(json, function (i, EmpData) {
                  
                  if (EmpData.CodigoNivel == 1) {
                      html = html + "<a>Teste</a>";
                      
                 

                      $.each(json, function (i, EmpData) {

                          if (EmpData.CodigoNivel == 2) {
                             
                              html = html + "<ul class='nav nav-children'>";
                              html = html + "<li class='nav-parent'>";
                              html = html + "    <a>PMP - Processo</a>";                      

                                 $.each(json, function (i, EmpData) {
                              
                                          if (EmpData.CodigoNivel == 3) {
                                              
                                              
                                              html = html + "    <ul class='nav nav-children'>";
                                              html = html + "        <li>";
                                              html = html + "            <a href='/Prova/Index/?CodigoMenu=3&CodigoUsuario=1'>Aquisições</a>";
                                              html = html + "        </li>";
                                              html = html + "        </ul>";
                                          }
                                      });//Foreach

                                      html = html + "        </li>";
                                      html = html + "    </ul>";
                            }
                  });//Foreach
                }
			      
              });//Foreach
       
             // $('#MenuDinamico').append(html);
          });//GetJason

    }
}(jQuery));