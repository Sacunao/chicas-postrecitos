window.addEventListener("load",function(){
    var select = document.getElementById("mySelect")
    select.addEventListener("change",function(){
        myFunction();
    });
    
    var icono = document.getElementsByClassName("icon-serv");
    for(var i = 0; i < icono.length; i++){
        icono[i] .addEventListener("mouseover",function(){
            bigImg(this);
        });
    }
    for(var i = 0; i < icono.length; i++){
        icono[i].addEventListener("mouseout",function(){
            normalImg(this);
        });
    }

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
    element.style.width = "368px";
    element.style.height = "272px";
}
function normalImg(element) {
    element.style.width = "240px";
    element.style.height = "191px";
}