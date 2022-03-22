var cantJugadores;
nombres = [];

function pasoUno(){
    //ocultar formilario primerPaso y mostrar el segundo formulario
    cantJugadores = document.getElementById("inputCantidad").value;
    var $form1 = document.getElementById("formCantidad")
    
    for(let i = 0;i < cantJugadores; i++){
        //Crear inputs nombre segun cantidad de jugadores dentro del segundo form
        const $ul = document.createElement("ul")
        $ul.innerHTML = '<li class="segundoPaso">Nombre del jugador: ' + (i+1) + '</li> <input type="text" id="inputNombre'+ (i+1) + '" class="segundoPaso">'
        document.getElementById("formNombres").appendChild($ul)
    }
    const $div = document.createElement("div")
    $div.innerHTML = '<button id="buttonNombres" type="button" class="segundoPaso" onclick="pasoDos()">Aceptar</button>'
    document.getElementById("formNombres").appendChild($div)

    $form1.classList.add("esconder")
}

function pasoDos(){
    var $formDatos = document.getElementById("formNombres")
    
    for(let i = 0;i < cantJugadores; i++){
        nombres[i] = document.getElementById("inputNombre" + (i+1)).value;
        console.log(nombres[i]);
    }
    
    $formDatos.classList.add("esconder")
    //FALTA ARMAR TABLERO E IMPRIMIRLO

    const tablero = document.createElement("div")
    tablero.innerHTML = '<div class>'
    document.getElementById("formNombres").appendChild(tablero)
}
