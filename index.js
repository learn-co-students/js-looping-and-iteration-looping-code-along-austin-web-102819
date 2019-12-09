function writeCards(namesArray, event){
    let a = []
    for (let i = 0; i < namesArray.length; i++){
          a.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`) 
        }
        return a
    }



function countDown(num){
   let i = num
    while (i >= 0){console.log (i);
    i--}
}



   

// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }

// function wrapGifts(gifts) {
//     let i = 0; // the initialization moved OUTSIDE the body of the loop!
//     while (i < gifts.length) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       i++; // the iteration moves INSIDE the body of the loop!
//     }
   
//     return gifts;
//   }
   