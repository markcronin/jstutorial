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

// prints FIZZBUZZ between a given range (lower to upper)
// prints FIZZ for any number divisible by num1
// prints BUZZ for any number divisible by num2
// prints FIZZBUZZ for any number divisible by both num1 and num2

function isFizzBuzz_range(lower,upper,num1,num2){
  for (let x = lower; x <= upper; x++){
    if (x % (num1 * num2) === 0){
      console.log ("FIZZBUZ");
    } else if ( x % num2 === 0){
      console.log ("BUZZ");
    } else if ( x % num1 === 0){
      console.log ("FIZZ");
    } else {
      console.log (x);
    }
  }
  return "";
}

// console.log (isFizzBuzz_range(1,100,3,7))



function makeFizzBuzzFunc (num1,num2){
  var extraStep = function(x){
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
  return extraStep
}

for (x = 1; x <= 100; x++) {
    var fizzBuzz_5_7 = makeFizzBuzzFunc (5, 7);
    console.log ( fizzBuzz_5_7(x) );
 }
