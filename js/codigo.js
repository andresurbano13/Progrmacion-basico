function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
    function eleccion(jugada){
        if(jugada == 1) {
        resultado = "piedra 🪨"
    }      else if(jugada == 2) {
        resultado = "elegiste 📃"
    }      else if(jugada == 3) {
        resultado = "elegiste ✂️"
    }      else {
        resultado = "mal elegido"
    }
        return resultado
}
// 1 es pierda 2 es papel 3 tijera
let jugador = 0
let min = 1
let max = 3
let triunfos = 0
let perdidas = 0
while(triunfos < 3 && perdidas < 3 ) {

        pc = aleatorio(1,3)
        jugador = prompt("elige: 1 piedra 2 papel 3 tijera")
        //alert("elegiste " + jugador)
        
        alert("pc elige " + eleccion(pc))
        alert("tu eliges " + eleccion(jugador))

    // COMBATE
    if(pc == jugador) {
        alert("EMPATE")
    }  else if(jugador == 1 && pc == 3) {
        alert("GANASTE")
        triunfos = triunfos + 1
    }  else if(jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    }  else if(jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    }  else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. perdiste " + perdidas + "veces.")