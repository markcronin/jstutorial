
// I need to figure out what this function does
function injectValue(value) {
return function(callback) {
return callback(null, value);
  };
}
/*
injectValue is a function that takes an input called "value" and it returns another function.
Let's call this function "innerFn". Here I call injectValue with the value 5.
*/
var innerFn = injectValue(5);
/*
innerFn's definition looks something like this:
function innerFn(callback) {
  return callback(null, value);
}
It takes another function that it calls "callback" as input. It then calls callback and passes 2 arguments in:
1. null
2. value   <--- this is the value passed into injectValue from the top, which we set to 5.
innerFn then returns the return value of this callback function.
To show how this all works together, I define a callback function with 2 parameters:
*/
// my callback function prints out the two arguments, then returns true if arg2 was an even number
var isMySecondArgumentEven = function(arg1, arg2) {
console.log('arg1 was ' + arg1 + ' and arg2 was ' + arg2);
// returns true if arg2 was even, else returns false
return arg2 % 2 === 0;
}
// Then I call innerFn and pass the callback function in as argument. innerFn will call isMySecondArgumentEven(null, 5)
// and then returns the callback's return value.
console.log('return value of innerFn:', innerFn(isMySecondArgumentEven)); // will return "false" because 5 is odd.
// In summary: injectValue makes functions that accept a callback function, and it passes whatever value is given to
// injectValue down to the inner callback as second argument.
