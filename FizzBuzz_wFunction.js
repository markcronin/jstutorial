function isFizzBuzz_3_5 (x){
  if ( x % 15 === 0){
    return "FIZZBUZZ"
  } else if ( x % 5 === 0){
    return "BUZZ"
  } else if ( x % 3 === 0){
    return "FIZZ"
  } else {
    return x
  }
}

function isFizzBuzz_4_7 (x){
  if ( x % 28 === 0){
    return "FIZZBUZZ"
  } else if ( x % 7 === 0){
    return "BUZZ"
  } else if ( x % 4 === 0){
    return "FIZZ"
  } else {
    return x
  }
}

for (x = 1; x <= 100; x++){
  console.log (isFizzBuzz_4_7(x))
}
