const chilometriInputEl = document.querySelector(".chilometri")
const risultatoDivEl = document.querySelector(".risultato")
const faciaSelectEl = document.querySelector(".fascia")


function calcola() {
    console.log(`Chilometri= ${chilometriInputEl.value}`)

    let costoBigliettoIniziale = chilometriInputEl.value * 0.21
    let costoBigliettoFinale = costoBigliettoIniziale
    const tariffa = faciaSelectEl.value

    if (tariffa === "junior") {
        costoBigliettoFinale = costoBigliettoIniziale * 0.8
    } else if (tariffa === "senior") {
        costoBigliettoFinale = costoBigliettoIniziale * 0.6
    }

    let msg = ""

    if (costoBigliettoIniziale == costoBigliettoFinale) {
        msg = `Il costo del tuo biglietto è ${costoBigliettoIniziale}€`
    } else {
        msg = `Il costo del tuo biglietto era ${costoBigliettoIniziale}€ ma pagherai ${costoBigliettoFinale}`
    }
    risultatoDivEl.innerText = msg
}