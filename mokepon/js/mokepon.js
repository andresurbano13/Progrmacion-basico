const sectionReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const buttonMascotaJugador = document.getElementById('boton-mascota')
botonFuego = document.getElementById('boton-fuego')
botonAgua = document.getElementById('boton-agua')
botonTierra = document.getElementById('boton-tierra')
botonReiniciar = document.getElementById("boton-reiniciar")

const sectionmascota = document.getElementById('seleccionar-mascota')
const inputlaquemona = document.getElementById('laquemona')
const inputguaterlove = document.getElementById('guaterlove')
const inputterron = document.getElementById('terron')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemiga')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')

botonFuego = document.getElementById('boton-fuego')
botonAgua = document.getElementById('boton-agua')
botonTierra = document.getElementById('boton-tierra')


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Liga{
       constructor(nombre, foto, vida){
              this.nombre = nombre
              this.foto = foto
              this.vida = vida
       }
}

let laquemona = new Liga ('Laquemona', './assets/OIP.jpg', 5)
let guaterlove = new Liga ('Guaterlove', './assets/pyke.jpg', 5)
let terron = new Liga ('Terron', './assets/malpite.jpg', 5)

function iniciarJuego() {
       sectionReiniciar.style.display = 'none'
       sectionSeleccionarAtaque.style.display = 'none'
       buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

       botonFuego.addEventListener('click',ataqueFuego)
       botonAgua.addEventListener('click', ataqueAgua)
       botonTierra.addEventListener('click', ataqueTierra)
       
       botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
       sectionmascota.style.display = 'none'
       sectionSeleccionarAtaque.style.display = 'flex'

   if (inputlaquemona.checked){
          spanMascotaJugador.innerHTML = 'laquemona'
   } else if (inputguaterlove.checked){
          spanMascotaJugador.innerHTML = 'guaterlove'
   } else if (inputterron.checked){
          spanMascotaJugador.innerHTML = 'terron'
   } else{
        alert('Elige una mascota')
   }
       seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
       let mascotaenmigoAleatorio = aleatorio(1,3)

       if (mascotaenmigoAleatorio == 1){
              spanMascotaEnemigo.innerHTML = 'laquemona'
       } else if (mascotaenmigoAleatorio == 2){
              spanMascotaEnemigo.innerHTML = 'guaterlove'
       } else {
              spanMascotaEnemigo.innerHTML = 'terron'
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
              crearMensajeFinal("Lo siento, Perdiste.")

       } else if (vidasEnemigo == 0){
              crearMensajeFinal("FELICITACIONES! Ganaste.")
              
       }
}

function crearMensaje(resultado){
       let nuevoAtaqueJugador = document.createElement('p')
       let nuevoAtaqueEnemigo = document.createElement('p')

       sectionMensajes.innerHTML = resultado
       nuevoAtaqueJugador.innerHTML = ataqueJugador
       nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

       // let parrafo = document.createElement('p')
       // parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador + ', la mascota de tu enemigo ataco con ' + ataqueEnemigo + ' >' + combate

       ataqueDelJugador.appendChild(nuevoAtaqueJugador)
       ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resuluadoFinal){
       sectionMensajes.innerHTML = resuluadoFinal

       botonFuego.disabled = true
       botonAgua.disabled = true
       botonTierra.disabled = true

       sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
       location.reload()
}
       
function aleatorio(min,max){
       return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)