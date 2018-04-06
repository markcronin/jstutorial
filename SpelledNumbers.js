// // prints out all numbers from  1 - 999 in text form
//
// for( let x = 0; x < 1000; x++)[
//
// ]
//
// // isThreeDigit
//
// printSingleDigit(9) + "hundred" + printSingleDigit(8) + "ty" + "-" + printSingleDigit(7)
//
// Nine hundred eighty-seven
//
// /*
//  * prints string for 10-99
//  */
// function printDoubleDigit(first, second) {
//   let result = "";
//
//   if (first === 1) {
//
//   }
//   if (first === 2) {
//     result = result + "twenty-";
//   }
//
//   result = result + printSingleDigit(second);
// }


// prints single digit number ( 1 - 9 ) in word form eg 3 = THREE
function printSingle (digit){
  if(digit === 1){
    return "ONE";
  }
  if(digit === 2){
    return "TWO"
  }
  if(digit === 3){
    return "THREE"
  }
  if(digit === 4){
    return "FOUR"
  }
  if(digit === 5){
    return "FIVE"
  }
  if(digit === 6){
    return "SIX"
  }
  if(digit === 7){
    return "SEVEN"
  }
  if(digit === 8){
    return "EIGHT"
  }
  if(digit === 9){
    return "NINE"
  }
}

function printDouble (digit){
  if(digit === 10){
    return "TEN"
  }
  if(digit === 11){
    return "ELEVEN"
  }
  if(digit === 12){
    return "TWELVE"
  }
  if(digit === 13){
    return "THIRTEEN"
  }

}
