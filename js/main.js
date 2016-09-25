/*Para que la barra de navegación sea dinámica*/

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $("#startchange");
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css("background-color", "#3D0D0D");
       } else {
          $(".navbar-default").css("background-color", "transparent");
       }
   });
    }
});

/*Para cambiar la apariencia de las alertas*/

  var enviar = document.getElementById("enviar");   
      enviar.addEventListener("click", function(event) {
      event.preventDefault();

      swal("¡Gracias!", "¡Ya enviaste tus datos!", "success");
  var formulario = document.getElementsByClassName("form-control");
    for(var i = 0; i < formulario.length; i++){
      formulario[i].value = "";
    }
  //document.getElementById("form-name").focus();

  
  });
    for(var i = 0; i < formulario.length; i++){
      formulario[i].focus();
}

