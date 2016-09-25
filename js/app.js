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
        postrenone();
    } else if(x == "clasicas"){
        document.getElementById("uno").style.display = "block";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";

        var arroz = document.getElementById("arrozLeche");
        arroz.addEventListener("click",function(){
            postreArroz();
        });

        var chifonP = document.getElementById("chifon");
        chifonP.addEventListener("click",function(){
            postreChifon();
        });

        var panuelitoP = document.getElementById("panuelito");
        panuelitoP.addEventListener("click",function(){
            postrePanuelito();
        });
    } else if (x == "veganas") {
        document.getElementById("dos").style.display = "block";
        document.getElementById("uno").style.display = "none";
        document.getElementById("tres").style.display = "none";
        var heladoP = document.getElementById("helado");
        heladoP.addEventListener("click",function(){
            postreHelado();
        });

        var avenaP = document.getElementById("avena");
        avenaP.addEventListener("click",function(){
            postreAvena();
        });

        var tartaP = document.getElementById("tarta");
        tartaP.addEventListener("click",function(){
            postreTarta();
        });

    } else if(x == "singluten"){
        document.getElementById("tres").style.display = "block";
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        var cocoP = document.getElementById("coco");
        cocoP.addEventListener("click",function(){
            postreCoco();
        });

        var natillaP = document.getElementById("natilla");
        natillaP.addEventListener("click",function(){
            postreNatilla();
        });

        var suspiroP = document.getElementById("suspiro");
        suspiroP.addEventListener("click",function(){
            postreSuspiro();
        });
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

function postrenone(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}

function postreArroz(){
    document.getElementById("arrozContent").style.display = "block";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}


function postreChifon(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "block";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}

function postrePanuelito(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "block";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}


function postreHelado(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "block";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}

function postreAvena(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "block";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}

function postreTarta(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "block";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}

function postreCoco(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "block";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "none";  
}
function postreNatilla(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "block";
    document.getElementById("suspiroContent").style.display = "none";  
}

function postreSuspiro(){
    document.getElementById("arrozContent").style.display = "none";
    document.getElementById("chifonContent").style.display = "none";
    document.getElementById("panuelitoContent").style.display = "none";
    document.getElementById("heladoContent").style.display = "none";
    document.getElementById("galletasContent").style.display = "none";
    document.getElementById("tartaContent").style.display = "none";
    document.getElementById("cocoContent").style.display = "none";
    document.getElementById("natillaContent").style.display = "none";
    document.getElementById("suspiroContent").style.display = "block";  
}