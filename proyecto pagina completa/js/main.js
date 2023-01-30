//efi//

(function(){
    "use strict";
    //regalos//
    var regalo= document.getElementById("regalo");

    document.addEventListener("DOMContentLoaded",function(){
        
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

    });//DOM content Loaded// //=documento cargado//
})();