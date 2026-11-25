const chilometriInputEl = document.getElementById("chilometri")
const risultatoDivEl = document.getElementById("risultato")
const fasciaSelectEl = document.getElementById("fascia")
const formElement = document.getElementById("biglietto-form")
const nameInputEl = document.getElementById("full-name")

formElement.addEventListener("submit", calcola)



function calcola(event) {

    event.preventDefault()

    const chilometri = Number(chilometriInputEl.value)

    if (chilometriInputEl.value == "" || isNaN(chilometri)) {
        risultatoDivEl.innerText = "I chilometri inseriti sono in un formato errato"
        return
    }

    let costoBigliettoIniziale = chilometriInputEl.value * 0.21
    let costoBigliettoFinale = costoBigliettoIniziale
    let tariffa = fasciaSelectEl.value

    if (tariffa === "junior") {
        costoBigliettoFinale = costoBigliettoIniziale * 0.8
    } else if (tariffa === "senior") {
        costoBigliettoFinale = costoBigliettoIniziale * 0.6
    }

    let msg = ""
    costoBigliettoIniziale = costoBigliettoIniziale.toFixed(2)
    costoBigliettoFinale = costoBigliettoFinale.toFixed(2)

    if (costoBigliettoIniziale == costoBigliettoFinale) {
        msg = `Ciao ${nameInputEl.value}. Il costo del tuo biglietto è ${costoBigliettoIniziale}€ ed hai selezionato la tariffa ${fasciaSelectEl.value}`
    } else {
        msg = `Ciao ${nameInputEl.value}. Il costo del tuo biglietto era ${costoBigliettoIniziale}€ ma pagherai ${costoBigliettoFinale} perchè hai selezionato la tariffa ${fasciaSelectEl.value}`
    }
    risultatoDivEl.innerText = msg
}




/* let msg = ""
   costoBigliettoIniziale = costoBigliettoIniziale.toFixed(2)
   costoBigliettoFinale = costoBigliettoFinale.toFixed(2)
   let nameImputEl= nameImputEl.value

   if (costoBigliettoIniziale == costoBigliettoFinale) {
       msg = `Ciao ${nameImputEl}Il costo del tuo biglietto è ${costoBigliettoIniziale}€`
   } else {
       msg = `Il costo del tuo biglietto era ${costoBigliettoIniziale}€ ma pagherai ${costoBigliettoFinale}`
   }
   risultatoDivEl.innerText = msg
   */