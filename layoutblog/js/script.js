//primero se ejecuta este
console.log("1");

//asi el codigo se ejecuta solo una vez
(function(){
//activa el uso estricto
    'use strict';
    
    //hace un evento 
    //finalmente este
    //el evento lo que hace es que ejecute su funcion
    //una vez todo el documento html cargue por primera vez

    document.addEventListener('DOMContentLoaded',function(){
        //obtiene el valor por medio de id//
        /*var logo = document.getElementById("logo");

        var navegacion= document.getElementById("navegacion");*/
        
        //permite obtener el valor por medio de la clase//
        //regresa los valores en forma de array
        //se puede acceder a ellos por medio del selector de listas
        //ademas regresa en ordenb numerico todos los elementos que
        //tengan ese class
        
        /*var nav = document.getElementsByClassName("navegacion-principal");

        var contenidos = document.getElementsByClassName("contenedor");
        console.log(contenidos[1]);
        console.log(nav[0]);*/

        //selecciona la etiqueta html que le pase//
        //get elements by tagname//

        /*var enlaces = document.getElementsByTagName("a");
        console.log(enlaces.length);
        //cambiar la estructura de una etiqueta por medio de js//
        for (var i=0; i<enlaces.length;i++){
            //el primer parametro es atributo a colocar//
            //el segundo el valor del atributo//
            enlaces[i].setAttribute("target","_blank");
        }

        //primero seleccion sidebar, luego los enlaces//
        var enlacesSide=document.getElementById("sidebar").getElementsByTagName("a");
        console.log(enlacesSide);

        for(var i =0;i<enlacesSide.length;i++){
            enlacesSide[i].setAttribute("href","http://www.google.com")
        }*/


        //query selector//
        //puede usar la sintaxis de css con las clases//
        
        /*var logo= document.querySelector("#logo");
        console.log(logo);
        
        //retorna solo el primero//
        var encabezado = document.querySelector("aside h2");
        console.log(encabezado);

        //retorna todos los que esten seleccionados//
        var cabeza = document.querySelectorAll("h2,footer p");
        //regresa el texto del elemento que se le indique//
        console.log(cabeza[1].innerText);
        console.log(cabeza);

        var enlaces=document.querySelector("a");
        console.log(enlaces);*/

        /*var enlaces = document.querySelectorAll("a");
        for(var i=0;i<enlaces.length;i++){
            //retorna el texto interno de cada enlace//
            console.log(enlaces[i].innerText);
        }*/

        //nodos//


        /*var enlaces =this.querySelectorAll("#menu a");
        console.log(enlaces[0].nodeType);
        console.log(enlaces[0].nodeName);
        //con esto se puede ver los atributos que tenga un
        //elemento//
        console.log(enlaces[0].attributes[0]);+
        //permtie ver el primer hijo//
        console.log(enlaces[0].firstChild);
        console.log(enlaces[0].firstChild.node);

        //cambio de valor por medio de nodos//
        enlaces[0].firstChild.nodeValue = "Home";
        
        enlaces.id="mi_id";*/


        //crear contenido por medio de js//

        /*var sidebar=document.querySelector("#sidebar");
        
        //creacion de elemento//
        var nuevoelemento= document.createElement("H1");
        //creacion de texto por nodo//
        var nuevotexto= document.createTextNode("Hola mundo");
        
        //agregando nuevo elemento//
        //primero lo agrego al h1 creado//
        nuevoelemento.appendChild(nuevotexto);
        //despues se lo agrego al sidebar//
        sidebar.appendChild(nuevoelemento);*/

        //agregar entrada 6//

        /*var enlacessidebar = document.querySelectorAll("#sidebar ul");
        var nuevoenlace=document.createElement("A");
        nuevoenlace.setAttribute("href","http://www.google.com");
        var textoenlace=document.createTextNode("Entrada 6");
        nuevoenlace.appendChild(textoenlace);
        //creando lista//
        var nuevalista=document.createElement("LI");
        nuevalista.appendChild(nuevoenlace);
        //agregar al menu//
        enlacessidebar[0].appendChild(nuevalista);*/


        //clonar nodo//

        /*//variable que almacena el contenido//
        var contenido = document.querySelectorAll("main");
        //clonacion del contenido//
        var nuevocontenido = contenido[0].cloneNode(true);

        //variable que almacena contenido
        var sidebar = document.querySelector("aside");

        //insercion del contendio por parte del sidebar//
        //para indicar donde quiere que vaya se debe//
        //colocar donde dice dir(sidebar) en child nodes//
        //y elegir la posicion adecuada//
        sidebar.insertBefore(nuevocontenido,sidebar.childNodes[5]);*/


        //creacion de elementos por medio de nodes//

        /*var sidebar = document.querySelector('aside');


        var masvisitados = document.createElement("H2");
        var textoVisitados= document.createTextNode("Post mas visitaods");
        masvisitados.appendChild(textoVisitados);
        //indicacmos donde va ir por medio de los nodes //
        sidebar.insertBefore(masvisitados,sidebar.childNodes[0]);
        
        var contenido = document.querySelectorAll("main h2");

        for (var i =0 ; i<contenido.length;i++){
            var nuevoelemento = document.createElement("LI");
            //aqui obtendra el valor de cada hijo en cada nodo//
            var nuevotexto= document.createTextNode(contenido[i].firstChild.nodeValue)
            
            nuevoelemento.appendChild(nuevotexto);

            sidebar.insertBefore(nuevoelemento,sidebar.childNodes[1]);
        }*/

        //removiendo nodos//
        //solo eliminara el primer hijo por el queryselector
        /*var primerpost = document.querySelector("main article");
        
        //removido//
        primerpost.parentNode.removeChild(primerpost);

        //eliminando enlaces//
        //el numero indica cual va borrar//
        var enlaces = document.querySelectorAll("#navegacion nav a")[2];
        enlaces.parentNode.removeChild(enlaces);*/


        //reemplazando elementos//

        var viejo= document.querySelector("main h2");
        var nuevo = document.querySelector("footer h2");

        //primero indica el reemplazo y el segundo cual va reemplazar//
        viejo.parentNode.replaceChild(nuevo,viejo)

        //reemplazar nodo con un nodo nuevo//
        
        var tituloN = document.createElement("H3");
        var nuevoT = document.createTextNode("Hola mundo");
        tituloN.appendChild(nuevoT);

        var viejoNodo = document.querySelector("main h2");
        viejoNodo.parentNode.replaceChild(tituloN,viejoNodo);
    
    })  
})();
//luego este
console.log("3");