// returns a string to be used by the encode function
// by repeating the encode word as many times as needed
// to match the length of the message being encoded
function setupKey(keyword,message){
  var encodeKey = keyword;
  while(encodeKey.length < message.length){
    encodeKey += encodeKey;
  }
  while (encodeKey.length > message.length){
    encodeKey = encodeKey.slice(0,-1);
  }
  return encodeKey;
}

// uses the first letter of the encodekey to encode OR decode
// the first letter of the message string depending on the value of 'x'
function alterCharacter(message, encodeKey, x) {
  if ( x === 0 ) {
    let i = ((message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97) < 127) ?
             (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) :
             (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) - 95);
    if ( i === 34 ) {
    return '\\\"';
  } else if ( i === 92 ) {
    return '\\\\';
  } else {
    return String.fromCharCode(i);
    }
  } else {
    let i = ((message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97) > 31) ?
             (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) :
             (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) + 95);
    return String.fromCharCode(i);
  }
}

// encodes a given string using the keyword
// message can include captail and lower case, also numbers and punctuation
// encode a message if 'x' is entered as 0
// decodes a message if 'x' is entered as 1
function code(keyword, message, x){
  var encodeKey = setupKey(keyword,message)
  var output = "";
  while (message.length > 0){
    output += (alterCharacter(message, encodeKey, x));
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

console.log (code("pineapple", `Everything seems to be working!`, 0))

console.log (code("pineapple", `T~rvy$wtrv(!ie|#+x~(oi '~}oxvt%`, 1))
