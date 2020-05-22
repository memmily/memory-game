
//card turns front face with click

const innerCards = document.querySelectorAll(".game-card");

function flipCard(card) {
  card.classList.toggle("active");
}

innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    let target = event.currentTarget;
    flipCard(target);

    //Turn back cards
    turnBack(document.querySelectorAll(".active"));
    
  });
});


// Turns two cards face back after click

function turnBack(activeCards) {
    if(activeCards.length>=2) {
      setTimeout(function(cards){
        for(i=0; i<cards.length; i++) {
          flipCard(cards[i]);
        }
      }, 1500, activeCards);
    }
}



//TODO:

//Block when person tries to turn a third card

//Study function bind, parameters and hoisting