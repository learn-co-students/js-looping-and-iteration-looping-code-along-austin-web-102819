// Code your solutions in this file

function writeCards(names)
{ 
  let thank = []
  let i = 0;
  while (i <= names.length - 1) {
    thank.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    i++;
  }

  return thank;
}

function countDown(number)
{
  while (number >= 0)
  {
    console.log(number);
    number -= 1;
  }
}