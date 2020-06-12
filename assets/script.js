//create cards for game
function printRepeatPrevious(x) {
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
    
  cards.push({obj});
  }
  return cards
}

let cards = printRepeatPrevious(16);

console.log(cards);

//create function to shuffle cards
//create function to print cards on html(string template/interpolation)





