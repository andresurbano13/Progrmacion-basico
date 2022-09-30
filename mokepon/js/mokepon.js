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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let campeones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeCampeones
let inputlaquemona
let inputguaterlove
let inputterron
let mascotaJugdor
let mascotaJugdorObjeto
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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src='./assets/grieta.png'

class Liga{
       constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10){
              this.nombre = nombre
              this.foto = foto
              this.vida = vida
              this.ataques = []
              this.x = x
              this.y = y
              this.ancho = 60
              this.alto = 60
              this.mapaFoto = new Image()
              this.mapaFoto.src = fotoMapa
              this.velocidadX = 0
              this.velocidadY = 0
       }

       pintarCampeon(){
              lienzo.drawImage(
                     this.mapaFoto,
                     this.x,
                     this.y,
                     this.ancho,
                     this.alto
              )
       }
}

let laquemona = new Liga('Laquemona', './assets/OIP.jpg', 5, './assets/OIP.jpg')
let guaterlove = new Liga('Guaterlove', './assets/pyke.jpg', 5, './assets/pyke.jpg')
let terron = new Liga('Terron', './assets/malpite.jpg', 5, './assets/malpite.jpg')

let laquemonaEnemigo = new Liga('Laquemona', './assets/OIP.jpg', 5, './assets/OIP.jpg', 80, 120)
let guaterloveEnemigo = new Liga('Guaterlove', './assets/pyke.jpg', 5, './assets/pyke.jpg', 150, 95)
let terronEnemigo = new Liga('Terron', './assets/malpite.jpg', 5, './assets/malpite.jpg', 200, 190)


guaterlove.ataques.push (
       {nombre:'💧', id:'boton-agua'},
       {nombre:'💧', id:'boton-agua'},
       {nombre:'💧', id:'boton-agua'},
       {nombre:'🔥', id:'boton-fuego'},
       {nombre:'🌱', id:'boton-tierra'}
)

terron.ataques.push (
       {nombre:'🌱', id:'boton-tierra'},
       {nombre:'🌱', id:'boton-tierra'},
       {nombre:'🌱', id:'boton-tierra'},
       {nombre:'💧', id:'boton-agua'},
       {nombre:'🔥', id:'boton-fuego'}
)

laquemona.ataques.push (
       {nombre:'🔥', id:'boton-fuego'},
       {nombre:'🔥', id:'boton-fuego'},
       {nombre:'🔥', id:'boton-fuego'},
       {nombre:'💧', id:'boton-agua'},
       {nombre:'🌱', id:'boton-tierra'}
)

campeones.push (laquemona,guaterlove,terron)

function iniciarJuego() {
       sectionSeleccionarAtaque.style.display = 'none'
       sectionVerMapa.style.display = 'none'

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
       //sectionSeleccionarAtaque.style.display = 'flex'

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
       sectionVerMapa.style.display = 'flex'
       iniciarMapa()
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
                     <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
                     `
              contenedorAtaques.innerHTML += ataquesCampeon
       })

       botonFuego = document.getElementById('boton-fuego')
       botonAgua = document.getElementById('boton-agua')
       botonTierra = document.getElementById('boton-tierra')
       botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   
            } else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else {
                ataqueJugador.push('TIERRA')
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
       let nuevoAtaqueDelJugador = document.createElement('p')
       let nuevoAtaqueDelEnemigo = document.createElement('p')

       sectionMensajes.innerHTML = resultado
       nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
       nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

       ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
       ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
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

function pintarCanvas(){

       mascotaJugdorObjeto.x = mascotaJugdorObjeto.x + mascotaJugdorObjeto.velocidadX
       mascotaJugdorObjeto.y = mascotaJugdorObjeto.y + mascotaJugdorObjeto.velocidadY
       lienzo.clearRect(0, 0, mapa.width, mapa.height)
       lienzo.drawImage(
              mapaBackground,
              0,
              0,
              mapa.width,
              mapa.height
       )
       mascotaJugdorObjeto.pintarCampeon()
       laquemonaEnemigo.pintarCampeon()
       guaterloveEnemigo.pintarCampeon()
       terronEnemigo.pintarCampeon()
}

function moverDerecha(){
       mascotaJugdorObjeto.velocidadX = 5
}

function moverAbajo(){
       mascotaJugdorObjeto.velocidadY = 5
}

function moverIzquierda(){
       mascotaJugdorObjeto.velocidadX = -5
}

function moverArriba(){
       mascotaJugdorObjeto.velocidadY = -5
}

function detenerMovimiento(){
       mascotaJugdorObjeto.velocidadX = 0
       mascotaJugdorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
       switch (event.key) {
              case 'w':
                     moverArriba()
                     break
              case 's':
                     moverAbajo()
                     break
              case 'a':
                     moverIzquierda()
                     break
              case 'd':
                     moverDerecha()
                     break
              default:
                     break;
       }
}

function iniciarMapa(){
       mapa.width = 1000
       mapa.height = 1000
       mascotaJugdorObjeto = obtenerObjetoMascota(mascotaJugdor)
       intervalo = setInterval(pintarCanvas, 50)

       window.addEventListener('keydown', sePresionoUnaTecla)
       window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
       for (let i = 0; i < campeones.length; i++) {
              if (mascotaJugdor === campeones[i].nombre){
                     ataques = campeones[i].ataques
                     return campeones[i]
              }
              
       }
}


window.addEventListener('load', iniciarJuego)