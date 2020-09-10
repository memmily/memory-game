var flippedCard = null;
var secondCardFlipped = null;


//create cards for game
function createCards(x) {
  let cards = [];
  for(i=1; i<=x; i++) {
    let obj = new Object();
    if(i%2===0) {
      obj.id=i;
      obj.content = i-1;
    } else {
      obj.id=i;
      obj.content = i;
      
    }
    
  cards.push(obj);

  }
  return cards
}

//Using The Fisher Yates Method to shuffle cards
function shuffleCards(cards) {
  var i, j, k;
  for (i = cards.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = cards[i]
    cards[i] = cards[j]
    cards[j] = k
  }

  return cards

}

function playGame() {
  let cards = createCards(16);
  cards = shuffleCards(cards);
  cardsOnScreen(cards);
  console.log(cards);
  flippedCard = null;
  secondCardFlipped = null;
  

}

playGame();

//create function to print cards on html(string template/interpolation)


function cardsOnScreen(cards) {
  var divContent = document.getElementById("container");
  var str = "";
  for(var i=0; i<cards.length; i++) {

    str+= `<div id="${cards[i].id}" class="game-card">
                      <div class="game-card-inner">
                        <div class="back rounded">${cards[i].content}</div>
                        <div class="front rounded"></div>
                      </div>
                    </div>`;                  
  }

  divContent.innerHTML = str;
}

// Toggling back and front classes on card
// let innerCards = document.querySelectorAll(".game-card");




function flipCard(card) {
  //if there is no card clicked
  if(flippedCard === null){
    flippedCard = card;
    flippedCard.classList.toggle("active");
    //if there is a card already clicked
  } else if(secondCardFlipped === null) {
    secondCardFlipped = card;
    secondCardFlipped.classList.toggle("active");
    
    //if cards have different content:
    if(flippedCard.textContent.trim() !== secondCardFlipped.textContent.trim()) {
      setTimeout(
        function(){
          flippedCard.classList.remove("active");
          secondCardFlipped.classList.remove("active"); 
          //Back to the original
          flippedCard = null;
          secondCardFlipped = null;
        }, 2000
      );
    } else {
      //if cards have the same content
      //Back to the original
      flippedCard = null;
      secondCardFlipped = null;
    }
  } 
}

const clickThisCard = function() {
  let innerCards = document.querySelectorAll(".game-card");
  innerCards.forEach(function (currentCard){
    currentCard.addEventListener('click', function(event) {
      flipCard(event.currentTarget);
      console.log(event.currentTarget);
    });
  });
}

clickThisCard();

// Button to start a new game


const newGame = document.querySelector(".new-game");
newGame.addEventListener('click', function() {
  playGame();
  clickThisCard();
});

// const newGame = document.querySelector(".new-game");
// newGame.addEventListener('click', function() {
//   location.reload();
// });

//adding timer to game(i hava to add it when the first card is clicked)
//https://www.dummies.com/programming/programming-games/how-to-add-timing-to-your-html5-game/
