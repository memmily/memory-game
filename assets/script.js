//card turns front face with click

let innerCards = document.querySelectorAll(".game-card");

function flipCard(card) {
  card.classList.toggle("active");
}
  
innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    flipCard(event.currentTarget);
  });
});

//card turns back face when other card is clicked