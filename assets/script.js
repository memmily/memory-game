

//card turns front face with click

//card turns back face when other card is clicked

const innerCards = document.querySelector(".game-card");
const frontFace = document.getElementsByClassName("front");
const backFace = document.getElementsByClassName("back");



innerCards.addEventListener("click", flipCard);

function flipCard() {
  let flippedCard;
  if(backFace) {
    flippedCard = frontFace;
  }
  return flippedCard
}
  










