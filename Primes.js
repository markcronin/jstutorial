
/*
 * isPrime computes if a number is prime or not.
 *
 * @param {Number} y    number to test
 * @return {Boolean}    true if prime, false otherwise
 */
function isPrime(input){
  // special case for 1, always false
  if( input === 1){
    return false;
  }
  // sufficient to test from 2 to sqrt(y)
  for( let i = 2; i <= Math.sqrt(input); i++ ){
    if( input % i === 0) {
      // not a prime, return immediately
      return false;
    }
  }
  // none of the numbers was a divisor, must be prime
  return true;
}

// main program
for( let x = 1; x <= 1000 ; x++ ){
  if(isPrime (x) === true){
    console.log (x);
  }
}
