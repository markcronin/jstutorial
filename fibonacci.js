// for (var x = 5; x >= 0; x--) {
//   console.log(x);
// }

// simple example of a function calling itself 5 times

// function f(number) {
//   console.log(number);
//   if (number === 0) {
//     return;
//   }
//   f(number - 1);
//   console.log('done')
// }
//
// f(5);

// var number = 6;
// var result = 1;
//
// for (var i = 1; i <= number; i++) {
//   result = result * i;
// }
//
// console.log( result );

// 5! = 1 * 2 * 3 * 4 * 5
// 6! = 1 * 2 * 3 * 4 * 5 * 6


// factorial

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return factorial(n - 1) * n;
// }
//
// console.log( factorial(6) );



function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

console.log( fib(6) );
