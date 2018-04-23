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

console.log (setupKey("dogs","thisisamessage"))


//encodes a given string using the keyword
//note: string input must be lower case a-z only, with any space
// eg "This is a message" should be input as "thisisamessage"
function encode(keyword,message){
  var encodeKey = setupKey(keyword,message)
  var output = ""
  while (message.length > 0){
    let i = ((message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97) < 123) ?
             (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) :
             (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) - 26);
    output += String.fromCharCode(i);
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

console.log (encode("train","murderontheorientexpress"))


//takes the encoded message and decodes it using the keyword
function decode(keyword,message){
  var encodeKey = setupKey(keyword,message)
  var output = ""
  while (message.length > 0){
    let i = ((message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97) > 96) ?
            (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) :
            (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) + 26);
    output += String.fromCharCode(i);
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

console.log (decode("train","flrlrkfnbuxfrqrgkefckvsa"))
