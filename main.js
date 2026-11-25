const chilometriInputEl = document.querySelector(".chilometri")
const calcolaButtonEl = document.querySelector(".calcola")


function calcola() {
    console.log(`Chilometri= ${chilometriInputEl.value}`)

    const prezzoBase = chilometriInputEl.value * 0.21

    console.log(prezzoBase)
}