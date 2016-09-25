#PROYECTO FINAL DE SPRINT JAVASCRIPT

##PLANEACIÓN DE PROYECTO

Antecedentes:
En la Actualidad Perú es un país con gran reconocimiento gastronómico y con un público grande interesado en el rubro, si hablamos de postres este también es parte de ese boomm, sin embargo hay dos públicos que tienen una oferta muy escasa, que es el caso de los veganos y los celiacos. 
Por eso, queremos crear una página que conserve la tradición de los dulces clásicos, pero también de opciones para esos dos nuevos segmentos.

##1. OBJETIVO

Ser un blog de consulta de recetas inclusivo que predomine en las búsquedas tanto de postres clásicos, como para veganos y celiacos.

Fuente 
Celiacos: http://bit.ly/2cv952R
Veganos: http://bit.ly/1Vr9cg4

![Imagen](http://1.1m.yt/eNbF3E-.png "Imagen")

##2. USUARIOS

1. Público interesado en dulces.
2. Celiacos.
3. Veganos.
4. Amas de casa.

##2. WIREFRAMES

El boceto de nuestra página es el siguiente:

![Imagen](http://1.1m.yt/NUEDJ5d.png "Imagen")

##3. CONTENIDO

Página que almacena recetas.
Call to Action: Boton Color Verde. Texto: Únete a la comunidad.
Headline: Se la repostera que quieres ser, nosotros te ayudamos.

![Imagen](http://1.1m.yt/7V6mwU-.png "Imagen")

Referencia Uno: http://www.cocinandosabores.com/ 
Referencia Dos: http://www.capriccio.com.pe/
Referencia Tres:http://www.elrincondelospostres.com/
Referencia Cuatro: http://www.directoalpaladar.com/

##APLICANDO EVENTOS

###EVENTO MOUSEOVER Y MOUSEOUT / TOUCHSTAR Y TOUCHEND

Utilizamos los eventos de mouseover y mouseout para dar un efecto a las imágenes, en este caso lucirá como si se tuviéra un efecto hover con la propiedad de transición, pero en esta ocasión es aplicada a través de funciones en Javascript. El touchstar y touchend cumplen la misma función solo que se usa en especifico para las acciones de deslizamiento táctil en las pantallas.

```javascript
    var icono = document.getElementsByClassName("icon-serv");
    //Para web
    for(var i = 0; i < icono.length; i++){
        icono[i] .addEventListener("mouseover",function(){
            bigImg(this);
        });
    }
    //Para táctil
    for(var i = 0; i < icono.length; i++){
        icono[i].addEventListener("touchstar",function(){
            normalImg(this);
        });
    }
    //Para web
    var icono = document.getElementsByClassName("icon-serv");
    for(var i = 0; i < icono.length; i++){
        icono[i] .addEventListener("mouseover",function(){
            bigImg(this);
        });
    }
    //Para táctil
    for(var i = 0; i < icono.length; i++){
        icono[i].addEventListener("touchend",function(){
            normalImg(this);
        });
    }
    function bigImg(element) {
        element.style.width = "280px";
        element.style.height = "210px";
    }
    function normalImg(element) {
        element.style.width = "240px";
        element.style.height = "191px";
    }
```
Antes 

![Imagen](http://2.1m.yt/SfWqH_x.png "Imagen")

Con Efecto

![Imagen](http://2.1m.yt/a6Pd109.png "Imagen")

###EVENTO CHANGE

Utilizamos el evento change en el select, acompañado de una función condicional permitirá que el contenido oculta aparezca según el valor evaluado.

```javascript
    var select = document.getElementById("mySelect")
    select.addEventListener("change",function(){
        myFunction();
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
```
Antes:

![Imagen](http://1.1m.yt/jCUqZgf.png "Imagen")

Después: 

![Imagen](http://1.1m.yt/niIEe13.png "Imagen")






```javascript
     var form = document.getElementById("form");
    form.addEventListener("focus", function(event) {
      event.target.style.background = "#ff9e9b";    
    }, true);
    form.addEventListener("blur", function(event) {
      event.target.style.background = "";    
    }, true);
```
