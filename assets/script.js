
//card turns front face with click

let innerCards = document.querySelectorAll(".game-card");

function flipCard(card) {
  card.classList.toggle("active");
}

innerCards.forEach(function (currentCard){
  currentCard.addEventListener('click', function(event) {
    let target = event.currentTarget;
    flipCard(target);
    //card turns back to the original position after a while
    setTimeout(function(){
      flipCard(target);
    }, 3000);
    
  });
});

//TODO:

//card turns back face when other card is clicked

//Study function bind and hoisting