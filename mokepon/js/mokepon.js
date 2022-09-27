const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
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

let laquemona = new Liga('Laquemona', './assets/OIP.jpg', 5)
let guaterlove = new Liga('Guaterlove', './assets/pyke.jpg', 5)
let terron = new Liga('Terron', './assets/malpite.jpg', 5)


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

laquemona.ataques.push (
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Fuego', id:'boton-fuego'},
       {nombre:'Agua', id:'boton-agua'},
       {nombre:'Tierra', id:'boton-tierra'}
)

campeones.push (laquemona,guaterlove,terron)

function iniciarJuego() {
       sectionSeleccionarAtaque.style.display = 'none'

       campeones.forEach((campeon) => {
              opcionDeCampeones = `
              <input type="radio" name="mascota" id=${campeon.nombre} />
              <label class="tarjeta-de-mokepon" for=${campeon.nombre}>
                  <p>${campeon.nombre}</p>
                  <img src=${campeon.foto} alt="" srcset="">
              </label>              
              `
              contenedorTarjetas.innerHTML += opcionDeCampeones

        inputlaquemona = document.getElementById('Laquemona')
        inputguaterlove = document.getElementById('Guaterlove')
        inputterron = document.getElementById('Terron')
       })

       botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

       botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
       sectionSeleccionarMascota.style.display = 'none'
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
                     if(e.target.textContent === 'Fuego') {
                            ataqueJugador.push('FUEGO')
                            console.log(ataqueJugador)
                            boton.style.background = '#112f58'
                            boton.disabled = true
                     } else if (e.target.textContent === 'Agua'){
                            console.log(ataqueJugador)
                            boton.style.background = '#112f58'
                            boton.disabled = true
                     } else {
                            ataqueJugador.push('Tierra')
                            console.log(ataqueJugador)
                            boton.style.background = '#112f58'
                            boton.disabled = true
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
       iniciarPelea()
}

function iniciarPelea(){
       if (ataqueJugador.length === 5){
              combate()
       }
}

function indexAmbosOponentes(jugador,enemigo){
       indexAtaqueJugador = ataqueJugador[jugador]
       indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

       for (let index = 0; index < ataqueJugador.length; index++) {
              if(ataqueJugador[index] === ataqueEnemigo[index]){
                     indexAmbosOponentes(index,index)
                     crearMensaje("EMPATE")
              } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
                     indexAmbosOponentes(index,index)
                     crearMensaje("Ganaste")
                     victoriasJugador++
                     spanVidasJugador.innerHTML = victoriasJugador
              } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
                     indexAmbosOponentes(index,index)
                     crearMensaje("Ganaste")
                     victoriasJugador++
                     spanVidasJugador.innerHTML = victoriasJugador
              } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
                     indexAmbosOponentes(index,index)
                     crearMensaje("Ganaste")
                     victoriasJugador++
                     spanVidasJugador.innerHTML = victoriasJugador
              } else {
                     indexAmbosOponentes(index,index)
                     crearMensaje("Perdiste")
                     vidasEnemigo++
                     spanVidasEnemigo.innerHTML = victoriasEnemigo
              }
       }

       revisarVidas()
}

function revisarVidas(){
       if (victoriasJugador === victoriasEnemigo){
              crearMensajeFinal("Esto fue un empate.")

       } else if (victoriasJugador > victoriasEnemigo){
              crearMensajeFinal("FELICITACIONES! Ganaste.")
              
       } else {
              crearMensajeFinal("Lo siento, perdiste")
       }
}

function crearMensaje(resultado){
       let nuevoAtaqueJugador = document.createElement('p')
       let nuevoAtaqueEnemigo = document.createElement('p')

       sectionMensajes.innerHTML = resultado
       nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
       nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

       ataqueDelJugador.appendChild(nuevoAtaqueJugador)
       ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resuluadoFinal){
       sectionMensajes.innerHTML = resuluadoFinal

       sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
       location.reload()
}
       
function aleatorio(min,max){
       return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)