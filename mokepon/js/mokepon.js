function iniciarJuego() {

    let buttonMascotaJugador = document.getElementById('button-mascota')
buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
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
}

window.addEventListener('load', iniciarJuego)