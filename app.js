var cantJugadores;
nombres = [];
ronda = 0;

function CantidadJugadores(){
    cantJugadores = document.getElementById("inputCantidad").value;
    var $formCantidad = document.getElementById("formCantidad");

    for(let i = 0;i < cantJugadores; i++){
        //Crear inputs nombre segun cantidad de jugadores dentro del segundo form
        const $ulNombres = document.createElement("ul");
        $ulNombres.innerHTML = '<li class="segundoPaso">Nombre del jugador: ' + (i+1) + '</li> <input type="text" id="inputNombre'+ (i+1) + '" class="segundoPaso">';
        document.getElementById("formNombres").appendChild($ulNombres);
    }
    const $buttonNombres = document.createElement("div");
    $buttonNombres.innerHTML = '<button id="buttonNombres" type="button" class="segundoPaso" onclick="nombresTabla()">Aceptar</button>';
    document.getElementById("formNombres").appendChild($buttonNombres);

    $formCantidad.classList.add("esconder");
}

function nombresTabla(){
    var $formNombres = document.getElementById("formNombres");
    
    for(let i = 0;i < cantJugadores; i++){
        nombres[i] = document.getElementById("inputNombre" + (i+1)).value;
    }
    
    $formNombres.classList.add("esconder");
    mostrarTabla();
}

function mostrarTabla(){
    var $tabla = document.getElementById("tabla");
    
    for(let i = 0;i < cantJugadores; i++){
        var $headTable = [];
        $headTable[i] = document.getElementById("Player"+ (i+1))
        $headTable[i].innerText = nombres[i];
    }

    $tabla.classList.remove("esconder");
    envido();
}

function envido(){
    ronda =+1;
    var botonesEnvido = '<button class="buttonsEnvido" type="button" onclick="actualizarPuntaje()">Ganó envido</button>';

    const $buttonEnvido = document.createElement("tr");

    $buttonEnvido.innerHTML = '<th scope="row">'+ ronda +'</th><td>'+botonesEnvido+'</td><td>'+botonesEnvido+'</td><td>'+botonesEnvido+'</td><td>'+botonesEnvido+'</td>';
    
    document.getElementById("registros").appendChild($buttonEnvido);
}
