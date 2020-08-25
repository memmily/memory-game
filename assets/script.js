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

var flippedCard = null;
var secondCardFlipped;


function flipCard(card) {
  //if there is no card clicked
  if(flippedCard === null){
    flippedCard = card;
    flippedCard.classList.toggle("active");
    //if there is a card already clicked
  } else if(flippedCard !== null) {
    secondCardFlipped = card;
    secondCardFlipped.classList.toggle("active");
    setTimeout(function(){flippedCard.classList.remove("active");}, 2000);
    setTimeout(function(){secondCardFlipped.classList.remove("active");}, 2000);
  }
}
  
innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    flipCard(event.currentTarget);
    // flipModes(event.currentTarget, innerCards);
  });
});

//Create function to determine cards states and conditions for flipping

// function flipModes(card) {
//   for (var i=15; i>=0; i--) {
//   if(card.classList.contains("active")) {
//     flipCard(card)
//   }
// }





// function flipModes(cards) {
//   var currentCard;
//   for (var i=15; i>=0; i--) {
//         if(cards[i].classList === "active"){
//           currentCard = cards[i];
//         }
//         else if (currentCard.content === cards[i].content 
//           && currentCard.id !== cards[i].id) {
//             flipCard(currentCard);
//             flipCard(cards[i]);
//         } 
    
//       }
// }
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

// Bom dia! É isso aí. Acho que naquela condição ali dentro 
// do for vc não verifica se a carta tá virada ou não.
// Talvez se vc criar uma função pra colocar a carta 
// pra cima 
// e outra função pra colocar a carta pra baixo, talvez isso te ajude dentro do for.