let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
       let sectionReiniciar = document.getElementById('boton-reiniciar')
       sectionReiniciar.style.display = 'none'

       let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
       sectionSeleccionarAtaque.style.display = 'none'

        let buttonMascotaJugador = document.getElementById('boton-mascota')
       buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

       botonFuego = document.getElementById('boton-fuego')
       botonFuego.addEventListener('click',ataqueFuego)
       botonAgua = document.getElementById('boton-agua')
       botonAgua.addEventListener('click', ataqueAgua)
       botonTierra = document.getElementById('boton-tierra')
       botonTierra.addEventListener('click', ataqueTierra)

       botonReiniciar = document.getElementById("boton-reiniciar")
       botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

       let sectionmascota = document.getElementById('seleccionar-mascota')
       sectionmascota.style.display = 'none'

       let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
       sectionSeleccionarAtaque.style.display = 'flex'

   let inputdercharman = document.getElementById('dercharman')
   let inputscuarul = document.getElementById('scuarul')
   let inputsorbulba = document.getElementById('sorbulba')
   let spanMascotaJugador = document.getElementById('mascota-jugador')

   if (inputdercharman.checked){
          spanMascotaJugador.innerHTML = 'dercharman'
   } else if (inputscuarul.checked){
          spanMascotaJugador.innerHTML = 'scuarul'
   } else if (inputsorbulba.checked){
          spanMascotaJugador.innerHTML = 'sorbulba'
   } else{
        alert('Elige una mascota')
   }
       seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
       let mascotaenmigoAleatorio = aleatorio(1,3)
       let spanMascotaEnemigo = document.getElementById('mascota-enemiga')

       if (mascotaenmigoAleatorio == 1){
              spanMascotaEnemigo.innerHTML = 'dercharman'
       } else if (mascotaenmigoAleatorio == 2){
              spanMascotaEnemigo.innerHTML = 'scuarul'
       } else {
              spanMascotaEnemigo.innerHTML = 'sorbulba'
       }

}

function ataqueFuego() {
       ataqueJugador = 'FUEGO'
       ataqueAleatorioEnemigo()
}

function ataqueAgua() {
       ataqueJugador = 'AGUA'
       ataqueAleatorioEnemigo()
}

function ataqueTierra() {
       ataqueJugador = 'TIERRA'
       ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
       let ataqueAleatorio = aleatorio(1,3)

       if (ataqueAleatorio == 1){
              ataqueEnemigo = 'FUEGO'
       }
       else if (ataqueAleatorio == 2){
              ataqueEnemigo = 'AGUA'
       }
       else {
              ataqueEnemigo = 'TIERRA'
       }

       combate()
}

function combate(){

       let spanVidasJugador = document.getElementById("vidas-jugador")
       let spanVidasEnemigo = document.getElementById("vidas-enemigo")

       if(ataqueJugador == ataqueEnemigo) {
              crearMensaje("EMPATE")
       }  else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
              crearMensaje("GANASTE")
              vidasEnemigo--
              spanVidasEnemigo.innerHTML = vidasEnemigo
       }  else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
              crearMensaje("GANASTE")
              vidasEnemigo--
              spanVidasEnemigo.innerHTML = vidasEnemigo
       }  else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
              crearMensaje("GANASTE")
              vidasEnemigo--
              spanVidasEnemigo.innerHTML = vidasEnemigo
       }  else {
              crearMensaje("PERDISTE")
              vidasJugador--
              spanVidasJugador.innerHTML = vidasJugador

       }

       revisarVidas()
}

function revisarVidas(){
       if (vidasJugador == 0){
              crearMensajeFinal("Lo siento, Perdiste. 😔")

       } else if (vidasEnemigo == 0){
              crearMensajeFinal("FELICITACIONES! Ganaste. 😁")
              
       }
}

function crearMensaje(resultado){
       let sectionMensajes = document.getElementById('resultado')
       let ataqueDelJugador = document.getElementById('ataque-del-jugador')
       let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

       let nuevoAtaqueJugador = document.createElement('p')
       let nuevoAtaqueEnemigo = document.createElement('p')

       sectionMensajes.innerHTML = resultado
       nuevoAtaqueJugador.innerHTML = ataqueDelJugador
       nuevoAtaqueEnemigo.innerHTML = ataqueDelEnemigo

       // let parrafo = document.createElement('p')
       // parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + ', la mascota de tu enemigo ataco con ' + ataqueEnemigo + ' >' + combate

       ataqueDelJugador.appendChild(nuevoAtaqueJugador)
       ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resuluadoFinal){
       let sectionMensajes = document.getElementById('resultado')

       sectionMensajes.innerHTML = resuluadoFinal

       botonFuego = document.getElementById('boton-fuego')
       botonFuego.disabled = true
       botonAgua = document.getElementById('boton-agua')
       botonAgua.disabled = true
       botonTierra = document.getElementById('boton-tierra')
       botonTierra.disabled = true

       let sectionReiniciar = document.getElementById('boton-reiniciar')
       sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
       location.reload()
}
       
function aleatorio(min,max){
       return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)