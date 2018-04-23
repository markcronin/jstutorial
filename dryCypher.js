// returns a string to be used by the encode function
// by repeating the encode word as many times as needed
// to match the length of the message being encoded
function setupKey(keyword, message) {
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
// the first letter of the message string depending on the value of 'encode'
function alterCharacter(message, encodeKey, encode) {
  let i;
  let c;
  if (encode) {
    c = message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97);
    i = (c < 127) ? c : c - 95;
    // escape \ and " characters
    if ( i === 34 ) {
      return '\\\"';
    } else if ( i === 92 ) {
      return '\\\\';
    }
  } else {
    c = message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97);
    i = (c > 31) ? c : c + 95;
  }
  return String.fromCharCode(i);
}

// encodes a given string using the keyword
// message can include capital and lower case, also numbers and punctuation
// encode a message if 'encode' is entered as true
// decodes a message if 'encode' is entered as false
function code(keyword, message, encode) {
  var encodeKey = setupKey(keyword, message)
  var output = "";
  while (message.length > 0){
    output += (alterCharacter(message, encodeKey, encode));
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

// console.log (code("pineapple", `Everything seems to be working!`, 0))
// console.log (code("pineapple", `T~rvy$wtrv(!ie|#+x~(oi '~}oxvt%`, 1))

// add command line options to the program to quickly encode/decode messages
const flag = process.argv[2];
const message = process.argv[3];
const keyword = 'pineapple';

if (flag === 'encode' || flag === 'decode') {
  console.log(code(keyword, message, flag === 'encode'));
} else {
  console.log("\nUsage:\n  node dryCypher.js (encode|decode) '<message>'\n\nExample:\n  node dryCypher.js encode 'Hi how are you?'\n");
}
