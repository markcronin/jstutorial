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

//uses the first letter of the encode key to change
// the first letter of the message string
function encodeCharacter(message, encodeKey){
  let i = ((message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97) < 127) ?
           (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) :
           (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) - 95);
  if ( i === 34 ) {
    return '\\\"';
  } else {
    return String.fromCharCode(i);
  }
}

//uses the first letter of the decode key to change
// the first letter of the message string
function decodeCharacter(message, encodeKey){
  let i = ((message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97) > 31) ?
           (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) :
           (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) + 95);
  return String.fromCharCode(i);
}

//encodes a given string using the keyword
//Message can include captail and lower case, also numbers and punctuation
function encode(keyword,message){
  var encodeKey = setupKey(keyword,message)
  var output = "";
  while (message.length > 0){
    output += (encodeCharacter(message, encodeKey));
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

//takes the encoded message and decodes it using the keyword
function decode(keyword,message){
  var encodeKey = setupKey(keyword,message)
  var output = "";
  while (message.length > 0){
    output += (decodeCharacter(message, encodeKey));
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}


console.log (encode("b", "This is a new message!"))

console.log(decode("b", "Uijt!jt!b!ofx!nfttbhf\""))
