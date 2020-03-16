// Code your solutions in this file
function writeCards(names, birthday) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
  }
  return cards;
}

function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
  console.log(number);
}
