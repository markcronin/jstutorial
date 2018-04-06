// 56 --> [6, 5]
// 1234 --> [4, 3, 2, 1]
function extractDigits(n) {
  var s = String(n);
  var arr = [];
  for (var i =  s.length - 1; i >= 0; i--){
    var d = Number(s[i]);
    arr.push(d);
  }
  return arr;
}

var result = extractDigits(8768)

for (var i = 0; i < result.length; i++) {
  console.log('digit ' + i + ' is ' + result[i])
}
