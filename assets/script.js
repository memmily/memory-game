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

console.log(cards);

//create function to shuffle cards
//create function to print cards on html(string template/interpolation)





