window.addEventListener("load",function(){
	
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

function bigImg(element) {
    element.style.width = "300px";
    element.style.height = "250px";
}
function normalImg(element) {
    element.style.width = "240px";
    element.style.height = "191px";
}