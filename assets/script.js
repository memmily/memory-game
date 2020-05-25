//card turns front face with click

const innerCards = document.querySelectorAll(".game-card");

var cardOne = null;
var cardTwo = null;
var timerId = null;



function flipCard(card) {
  card.classList.toggle("active");
}

function setClickedCard(card) {
  if(cardOne===null) {
    cardOne = card;
  } else if(cardTwo===null) {
    cardTwo = card;
  } else {
    flipCard(cardOne);
    flipCard(cardTwo);
    cardOne = card;
    cardTwo = null;
  }
}

innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    card = event.currentTarget;
    flipCard(card);

    setClickedCard(card);

    //if you click the same card already clicked, do nothing

    //Turns two cards face back after click

 //Turn back cards
    // turnBack(document.querySelectorAll(".active"));

  });
});
    
function turnBack(activeCards) {
    if(activeCards.length>=2) {
      setTimeout(function(cards){
        for(i=0; i<cards.length; i++) {
          flipCard(cards[i]);
        }
      }, 1500, activeCards);
    }
}



//Game states

// estado inicial - todas as cartas devem estar viradas para baixo
// clicked_card_1 deve ser null
// clicked_card_2 deve ser null
// timerId deve ser null

// ao clicar em uma nova carta ...

// ao clicar em outra nova carta ...

// durante o timeout ...

// ao final do timeout ...


// o jogo acaba quando ...?


//TODO:

//Block when person tries to turn a third card

//save currentcard

//Study function bind, parameters and hoisting

