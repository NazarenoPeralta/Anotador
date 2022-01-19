function pasoUno(){
    //ocultar formilario primerPaso y mostrar el segundo formulario
    var cantJugadores
    cantJugadores = document.getElementById("inputCantidad").value;
    var $form1 = document.getElementById("formCantidad")
    
    for(let i = 0;i < cantJugadores; i++){
        //Crear inputs nombre segun cantidad de jugadores dentro del segundo form
        const $ul = document.createElement("ul")
        $ul.innerHTML = '<li class="segundoPaso">Nombre del jugador: ' + (i+1) + '</li> <input type="number" id="inputNombres" class="segundoPaso"> <button id="buttonNombres" class="segundoPaso"></button>'
        document.getElementById("formNombres").appendChild($ul)
    }
    $form1.classList.add("esconder")
}
