var answer = Math.floor(Math.random() * 1001)
var top = 1000
var bottom = 0
var guess = 0
var attempt = 1

  console.log ("")
  console.log ("The randomly selected number is " + answer)
  console.log ("")

while ( guess != answer){
  guess = Math.floor((top - bottom)/2) + bottom
  if (guess < answer){
    bottom = guess
  } else if (guess > answer){
    top = guess
  }

  if (attempt === 1){
    console.log ("The 1st guess was: " + guess)
  } else if (attempt === 2){
    console.log ("The 2nd guess was: " + guess)
  } else if (attempt === 3){
    console.log ("The 3rd guess was: " + guess)
    // i realised that from 4 to 9 could be logged with the same code
  } else if (attempt <= 9){
    console.log ("The " + attempt +"th guess was: " + guess)
  } else {
    console.log ("The final guess was: " + guess)
  }
  attempt = attempt + 1
}
console.log ("")
