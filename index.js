// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]


function writeCards(namesArray, event) {
  let cards = []
    for (let i=0; i < namesArray.length; i++ ){
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
        console.log(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);

    }

    return cards;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -=1;
  }
  console.log(number);
}