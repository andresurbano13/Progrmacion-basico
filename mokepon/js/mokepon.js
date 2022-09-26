const sectionReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const buttonMascotaJugador = document.getElementById('boton-mascota')

botonReiniciar = document.getElementById("boton-reiniciar")

const sectionmascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemiga')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques') 

let campeones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeCampeones
let inputlaquemona
let inputguaterlove
let inputterron
let mascotaJugdor
let ataquesCampeon
let ataquesCampeonEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Liga{
       constructor(nombre, foto, vida){
              this.nombre = nombre
              this.foto = foto
              this.vida = vida
              this.ataques = []
       }
}

let laquemona = new Liga ('Laquemona', './assets/OIP.jpg', 5)
let guaterlove = new Liga ('Guaterlove', './assets/pyke.jpg', 5)
let terron = new Liga ('Terron', './assets/malpite.jpg', 5)

laquemona.ataques.push (
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Agua', id:'boton-agua'},
       {nombre:'Tierra', id:'boton-tierra'}
)

guaterlove.ataques.push (
       {nombre:'Agua', id:'boton-agua'},
       {nombre:'Agua', id:'boton-agua'},
       {nombre:'Agua', id:'boton-agua'},
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Tierra', id:'boton-tierra'}
)

terron.ataques.push (
       {nombre:'Tierra', id:'boton-tierra'},
       {nombre:'Tierra', id:'boton-tierra'},
       {nombre:'Tierra', id:'boton-tierra'},
       {nombre:'Agua', id:'boton-agua'},
       {nombre:'Fuego', id:'boton-fuego'}
)

campeones.push (laquemona,guaterlove,terron)

function iniciarJuego() {
       sectionReiniciar.style.display = 'none'

       campeones.forEach((campeon) => {
              opcionDeCampeones = `
              <input type="radio" name="mascota" id=${campeon.nombre} />
              <label class="tarjeta-de-mokepon" for=${campeon.nombre}>
                  <p>${campeon.nombre}</p>
                  <img src=${campeon.foto} alt="" srcset="">              
              `
              contenedorTarjetas.innerHTML += opcionDeCampeones

        inputlaquemona = document.getElementById('Laquemona')
        inputguaterlove = document.getElementById('Guaterlove')
        inputterron = document.getElementById('Terron')
       })

       sectionSeleccionarAtaque.style.display = 'none'
       buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

       
       
       botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
       sectionmascota.style.display = 'none'
       sectionSeleccionarAtaque.style.display = 'flex'

   if (inputlaquemona.checked){
          spanMascotaJugador.innerHTML = inputlaquemona.id
          mascotaJugdor = inputlaquemona.id
   } else if (inputguaterlove.checked){
          spanMascotaJugador.innerHTML = inputguaterlove.id
          mascotaJugdor = inputguaterlove.id
   } else if (inputterron.checked){
          spanMascotaJugador.innerHTML = inputterron.id
          mascotaJugdor = inputterron.id
   } else{
        alert('Elige una mascota')
   }

       extraerAtaques(mascotaJugdor)
       seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugdor){
       let ataques
       for (let i = 0; i < campeones.length; i++) {
              if (mascotaJugdor === campeones[i].nombre){
                     ataques = campeones[i].ataques
              }
              
       }
       mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
       ataques.forEach((ataque) => {
              ataquesCampeon = `
              <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}
                </button>
              `
              contenedorAtaques.innerHTML += ataquesCampeon
       })

        botonFuego = document.getElementById('boton-fuego')
        botonAgua = document.getElementById('boton-agua')
        botonTierra = document.getElementById('boton-tierra')
        botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
       botones.forEach ((boton) => {
              boton.addEventListener('click', (e) => {
                     if(e.target.texcontent === 'Fuego') {
                            ataqueJugador.push('FUEGO')
                            console.log(ataqueJugador)
                            boton.style.background = '#112f58'
                     } else if (e.target.texcontent === 'Agua'){
                            console.log(ataqueJugador)
                            boton.style.background = '#112f58'
                     } else {
                            ataqueJugador.push('Tierra')
                            console.log(ataqueJugador)
                            boton.style.background = '#112f58'
                     }
                     ataqueAleatorioEnemigo()
              })
       })
}

function seleccionarMascotaEnemigo() {
       let mascotaAleatoria = aleatorio(0, campeones.length -1)

       spanMascotaEnemigo.innerHTML = campeones[mascotaAleatoria].nombre
       ataquesCampeonEnemigo = campeones[mascotaAleatoria].ataques
       secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
       let ataqueAleatorio = aleatorio(0,ataquesCampeonEnemigo.length -1)

       if (ataqueAleatorio == 0 || ataqueAleatorio ==1){
              ataqueEnemigo.push('FUEGO')
       }
       else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
              ataqueEnemigo.push('AGUA')
       }
       else {
              ataqueEnemigo.push('TIERRA')
       }
       console.log(ataqueEnemigo)
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