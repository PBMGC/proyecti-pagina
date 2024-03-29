//efi//

(function(){
    "use strict";

    //regalos//
    var regalo= document.getElementById("regalo");

    document.addEventListener("DOMContentLoaded",function(){
        
        var map = L.map('mapa').setView([-12.096133, -77.03142], 90);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-12.096133, -77.03142]).addTo(map)
            .bindPopup('Aqui es el evento')
            .openPopup();  
    
        //campo datos usuario//
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        //campo pases//
        var pase_dia= document.getElementById("pase_dia");
        var pase_dosdias= document.getElementById("pase_dosdias");
        var pase_completo= document.getElementById("pase_completo");

        //botones y divs//
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var botonRegistro = document.getElementById("btnRegistro");
        var listaProductos = document.getElementById("lista-productos");
        var suma = document.getElementById("suma-total");
        //EXTRAS//
        var etiquetas = document.getElementById("etiquetas");
        var camisas = document.getElementById("camisa_evento");

        //cuando hagan click en calcular//
        //primer valor la accion que inicie el evento//
        //el segundo la funcion que pasara una vez se realize click//
        //para evitar error de adevent listener solo es necesario poner las llaves
        if(document.getElementById('calcular')){

            calcular.addEventListener('click', calcularmontos);
            
            
            function calcularmontos(event){
            event.preventDefault();
            if (regalo.value==""){
                alert ("elige un regalo bastardo");
                regalo.focus;
            }
            else{
                //esto sirve para indicar que se usara el sistema decimal//
                //cada que se use parse//
                var boletosDia= parseInt(pase_dia.value,10) || 0,
                boletos2Dias=parseInt(pase_dosdias.value,10)||0,
                boletosCompleto = parseInt(pase_completo.value,10)||0,
                cantCamisas = parseInt(camisas.value,10)||0,
                cantEtiquetas = parseInt(etiquetas.value,10)||0;
                
                console.log("boletos adquiridos: " + (boletosDia+boletos2Dias+boletosCompleto));
                
                var totalpagar = (boletosDia*30) + (boletos2Dias*50) +(boletosCompleto*80) + (cantCamisas*20-((cantCamisas*20)*0.07))+ (cantEtiquetas*5);
                
                console.log(totalpagar);
                
                var listadoProductos = [];
                
                if (boletosDia) {
                    if (boletosDia==1) listadoProductos.push( boletosDia + " Boleto 1 dia");
                    if (boletosDia>1) listadoProductos.push( boletosDia + " Boletos 1 dia");
                }
                if (boletos2Dias) {
                    if (boletos2Dias==1) listadoProductos.push( boletos2Dias + " Boleto 2 dias");
                    if (boletos2Dias>1) listadoProductos.push( boletos2Dias + " Boletos 2 dias");
                }
                if (boletosCompleto){
                    if (boletosCompleto==1) listadoProductos.push( boletosCompleto + " Boleto dia compleo");
                        if (boletosCompleto>1) listadoProductos.push( boletosCompleto + " Boletos dia completo");
                    }
                    if (cantCamisas) {
                        if (cantCamisas==1) listadoProductos.push( cantCamisas + " camisa");
                        if (cantCamisas>1) listadoProductos.push( cantCamisas + " camisas");
                    }
                    if (cantEtiquetas) {
                        if (cantEtiquetas==1) listadoProductos.push( cantEtiquetas + " etiqueta");
                        if (cantEtiquetas>1) listadoProductos.push( cantEtiquetas + " etiquetas");
                    }
                    
                    //esconder//
                    //cambiar estilo desde js//
                    listaProductos.style.display="block";
                    //aqui se reinicia el inner en cada click//
                    listaProductos.innerHTML= '';
                    
                    for (var i =0 ; i<listadoProductos.length;i++){
                        listaProductos.innerHTML += listadoProductos[i] + "<br/>"
                    }
                    
                    suma.innerHTML = '$' + totalpagar.toFixed(2);
                }
            }
            }
            
        });//DOM content Loaded// //=documento cargado//
        
})();

$(function(){

    //letteting con plugin

    $('.nombre-sitio').lettering();

    //menu fijo
    //con esta variable y el metodo height
    //gracias a jquery se puede saber cual es el tamaño de la ventana
    var windowHeight= $(window).height();

    //saber cuanto mide la barra//
    //se le puede pasar true para saber mas a profundidad sus valores
    var barraaltura = $(".barra").innerHeight();

    
    
    //el scroll captar los scroll que se hagan
    $(window).scroll(function(){
        //aqui captara los scroll
        var scroll = $(window).scrollTop();

        //validacion
        if(scroll>windowHeight){
            $(".barra").addClass("fixed");
            //añadido del margin de manera dinamica por medio de js
            //al saber la altura de la barra , ese valor se convertira
            //en los pixeles de margin top al ponerse en fixed
            $("body").css({"margin-top":barraaltura+"px"});
            //al ponerle el margin se evita el salto que se ve mal
        } else{
            $(".barra").removeClass("fixed");
            $("body").css({"margin-top":"0px"});
        }
        
    });

    //menu responsive//
    $(".menu-movil").on('click',function(){
        //lo que hace slideToogle hace que itere entre slideup y down //
        //cada vez que este en up pasa a down caundo se le de click
        $(".navegacion-principal").slideToggle();

    });



    //programa conferencias//
    $('.ocultar').hide();
    $('.programa-evento .info-curso:first').show();
    $('menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click',function(){
        //remover clase con jquery
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo')
        $('.ocultar').hide();
        //obtener valor por medio de attr
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
    });

    //Animaciones Numeros
    //por medio de jquery animate numbers (libreria)
    
    //nth child hace que cada hijo sea igual a un numero 
    //el animate pide un parametro si o si 
    //el primer valor indica el numero que se desea animado
    //el segundo indica cuanto durara la animacion
    $('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number:3},1500);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number:8},1200);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number:10},1200);


    //cuenta regresiva con plugins
    //sintaxis que pide la libreria para ejecutar las animaciones
    //pide el año despues el mes y por ultimo el dia
    $('.cuenta-regresiva').countdown('2023/04/03 08:00:00',function(event){
        //pide indicarle que va ir con id
        //ademas jquery tiene una funcion que permite poner html
        //con %D se le indica que imprima los dias
        //la funcion strftime convierte strings a days
        $("#dias").html(event.strftime('%D'));
        $("#horas").html(event.strftime('%H'));
        $("#minutos").html(event.strftime('%M'));
        $("#segundos").html(event.strftime('%S'));


    });




});


