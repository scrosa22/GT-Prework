let firstCard = 6
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEL = document.getElementById("message-el")

let sumEL = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]  
    sumEL.textContent = "sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21){
        message = "You're out of the game!"
        isAlive = false
    }
    messageEL.textContent = message

}
function newCard () {
    console.log("Drawing a new card from the deck")

    let card = 5

    sum += card

    renderGame()
}



// cash out
console.log(message)
