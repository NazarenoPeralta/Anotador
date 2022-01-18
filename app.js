function pasoUno(){
    //ocultar formilario primerPaso y mostrar el segundo formulario
    var cantJugadores
    cantJugadores = document.getElementById("inputCantidad").value;
    
    for(let i = 0;i < cantJugadores; i++){
        //Crear inputs nombre segun cantidad de jugadores dentro del segundo form
        document.querySelector("#formNombres").innerHTML = '<p class="segundoPaso">Nombre de los jugadores:</p> <input type="number" id="inputNombres" class="segundoPaso"> <button id="buttonNombres" class="segundoPaso"></button>'
    }
}
