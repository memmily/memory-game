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

let cards = createCards(16);
cards = shuffleCards(cards);
cardsOnScreen(cards);

console.log(cards);


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
let innerCards = document.querySelectorAll(".game-card");

function flipCard(card) {
  card.classList.toggle("active");
}
  
innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    flipCard(event.currentTarget);
    flipModes(event.currentTarget, innerCards);
  });
});

//Create function to determine cards states and conditions for flipping

function flipModes(currentCard, cards) {
  for (var i=15; i>=0; i--) {
        if(currentCard.content === cards[i].content 
          && currentCard.id !== cards[i].id) {
            flipCard(currentCard);
            flipCard(cards[i]);
        } 
    
      }
}
//Add click event on the cards

// var divContent = document.getElementById("container");
// console.log(innerCards);
// let currentCard;
// console.log(currentCard);
// cards.addEventListener("click", function() {
//   currentCard = event.currentTarget;
//   for (var i=15; i>=0; i--) {
//     if(currentCard.id !== divContent[i].id 
//       && currentCard.content === divContent[i].content) {
//         flipCard(currentCard);
//         flipCard(divContent[i]);
//       } 

//   }
// });

