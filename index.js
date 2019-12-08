// Code your solutions in this file


function writeCards(namesArray, event) {
    let thankYous = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYous.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }

    return thankYous;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}