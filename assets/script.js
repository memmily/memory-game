//card turns front face with click

const innerCards = document.querySelectorAll(".game-card");

var cardOne = null;
var cardTwo = null;
var timerId = null;



function flipCard(card) {
  card.classList.toggle("active");
}

function setFlipStates(card) {

  if(cardOne===card || cardTwo===card) {
    return
  }
  if(cardOne===null) {
    cardOne = card;
    flipCard(cardOne);
    console.log({cardOne});
  } else if(cardTwo===null) {
    cardTwo = card;
    flipCard(cardTwo);
    console.log({cardTwo});
  } else {
    flipCard(cardOne);
    flipCard(cardTwo);
    cardOne = card;
    flipCard(cardOne);
    cardTwo = null;
  }
}

function matchPartner() {
  if(cardOne===null || cardTwo===null) {
    return
  }

  if(cardOne.dataset.pair === cardTwo.dataset.pair) {

    setTimeout(function(){
      cardOne.remove();
      cardTwo.remove();
      }
    , 1500);
    
    // cardOne.remove();
    // cardTwo.remove();
    //https://developer.mozilla.org/pt-BR/docs/Web/API/ChildNode/remove
    // cardOne.innerHTML = "";
    // cardTwo.innerHTML = "";
  }

}

innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    const card = event.currentTarget;

    setFlipStates(card);
    
    matchPartner();

  });
});

//SNIPPETS TO TAKE A LOOK AGAIN

    // if(cardOne === cardTwo) {
     
    //   !flipCard(card);
    // }

    //if you click the same card already clicked, do nothing

    //Turns two cards face back after click

 //Turn back cards
    // turnBack(document.querySelectorAll(".active"));

    
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


