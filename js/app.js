window.addEventListener("load",function(){
    var select = document.getElementById("mySelect")
    select.addEventListener("change",function(){
        myFunction();
    });
    //Para web
    var icono = document.getElementsByClassName("icon-serv");
    for(var i = 0; i < icono.length; i++){
        icono[i] .addEventListener("mouseover",function(){
            bigImg(this);
        });
    }
    //Para táctil
    for(var i = 0; i < icono.length; i++){
        icono[i].addEventListener("touchstar",function(){
            bigImg(this);
        });
    }
    //Para web
    var icono = document.getElementsByClassName("icon-serv");
    for(var i = 0; i < icono.length; i++){
        icono[i] .addEventListener("mouseout",function(){
            normalImg(this);
        });
    }
    //Para táctil
    for(var i = 0; i < icono.length; i++){
        icono[i].addEventListener("touchend",function(){
            normalImg(this);
        });
    }
    var form = document.getElementById("form");
    form.addEventListener("focus", function(event) {
      event.target.style.background = "#ff9e9b";    
    }, true);
    form.addEventListener("blur", function(event) {
      event.target.style.background = "";    
    }, true);

/*Para cambiar la apariencia de las alertas*/

    var enviar = document.getElementById("enviar");   
    enviar.addEventListener("click", function(event) {
        event.preventDefault();

        swal("¡Gracias!", "¡Ya enviaste tus datos!", "success");

//Limpieza de campos del formulario

        var formulario = document.getElementsByClassName("form-control");
        for(var i = 0; i < formulario.length; i++){
          formulario[i].value = "";
        }
        //focus al input
        for(var i = 0; i < formulario.length; i++){
            formulario[i].focus();
        }
    });



    
});

function myFunction() {
    var x = document.getElementById("mySelect").value;
    if(x == "null"){
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
    } else if(x == "clasicas"){
        document.getElementById("uno").style.display = "block";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
    } else if (x == "veganas") {
        document.getElementById("dos").style.display = "block";
        document.getElementById("uno").style.display = "none";
        document.getElementById("tres").style.display = "none";
    } else if(x == "singluten"){
        document.getElementById("tres").style.display = "block";
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
    }
}
function bigImg(element) {
    element.style.width = "280px";
    element.style.height = "210px";
}
function normalImg(element) {
    element.style.width = "240px";
    element.style.height = "191px";
}