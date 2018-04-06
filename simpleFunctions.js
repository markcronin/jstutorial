function add1(mark) {
  return mark + 1;
}

function add(x, y) {
  return x + y;
}

function getLastDigit(n) {
  //
}


// returns 'st' for 1, 'nd' for 2, 'rd' for 3, else 'th'
function getSuffixForDigit(d) {
  // d = getLastDigit(d);

  if (d === 1) {
    return d + 'st';
  }
  if (d === 2) {
    return d + 'nd';
  }
  if (d === 3) {
    return d + 'rd';
  }
  return d + 'th';
}


console.log (getSuffixForDigit(1));
console.log (getSuffixForDigit(2));
console.log (getSuffixForDigit(3));
console.log (getSuffixForDigit(41));
