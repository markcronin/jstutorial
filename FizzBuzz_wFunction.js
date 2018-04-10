function isFizzBuzz_3_5 (x){
  if ( x % 15 === 0){;
  } else if ( x % 5 === 0){
    return "BUZZ";
  } else if ( x % 3 === 0){
    return "FIZZ";
  } else {
    return x;
  }
}

function isFizzBuzz_4_7 (x){
  if ( x % 28 === 0){
    return "FIZZBUZZ";
  } else if ( x % 7 === 0){
    return "BUZZ";
  } else if ( x % 4 === 0){
    return "FIZZ";
  } else {
    return x;
  }
}

/*
 *  returns FIZZ for any number x divisible by num1
 *  returns BUZZ for any number x divisible by num2
 *  returns FIZZBUZZ for any number x diviible by both num1 && num2
 */

function isFizzBuzz_x_y(x,num1,num2){
  if ( x % (num1 * num2) === 0){
    return "FIZZBUZZ";
  } else if ( x % num2 === 0){
    return "BUZZ";
  } else if ( x % num1 === 0){
    return "FIZZ";
  } else {
    return x;
  }
}

for (x = 1; x <= 100; x++){
  console.log (isFizzBuzz_x_y(x,3,7))
}
