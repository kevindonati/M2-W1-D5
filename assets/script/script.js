const animazione = function () {
  let lettere = document.getElementsByTagName("path")
  setInterval(() => {
    // ESTRAGGO LETTERA CASUALE
    const numeroCasuale = Math.floor(Math.random() * lettere.length)
    const lettera = lettere[numeroCasuale]

    // ACCENDO/SPENGO LETTERE
    const controlloOpacità = lettera.getAttribute("opacity")
    if (controlloOpacità === "1") {
      lettera.setAttribute("opacity", "0")
    } else {
      lettera.setAttribute("opacity", "1")
    }

    // ANIMAZIONE
    lettera.style.transition = "opacity 0.3s ease"
  }, 20)
}

document.addEventListener("DOMContentLoaded", animazione)

window.addEventListener("scroll", function () {
  const header = document.querySelector("header")
  const nav = document.querySelector("nav")
  const bottone = document.getElementById("cambia-colore")

  const altezzaHeader = header.offsetHeight
  const posizioneScroll = window.scrollY

  if (altezzaHeader < posizioneScroll) {
    nav.classList.add("superato")
    bottone.classList.add("btn-superato")
  } else {
    nav.classList.remove("superato")
    bottone.classList.remove("btn-superato")
  }
})
