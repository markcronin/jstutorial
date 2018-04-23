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
//Message can include captail and lower case, also numbers and punctuation
function encode(keyword,message){
  var encodeKey = setupKey(keyword,message)
  var output = ""
  while (message.length > 0){
    let i = ((message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97) < 127) ?
             (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) :
             (message.charCodeAt(0) + (encodeKey.charCodeAt(0) - 97)) - 95);
    output += String.fromCharCode(i);
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

console.log (encode("pineapple","The quick brown fox jumped over the lazy dog, is a common sentence used as input to test programmes like this."))


//takes the encoded message and decodes it using the keyword
function decode(keyword,message){
  var encodeKey = setupKey(keyword,message)
  var output = ""
  while (message.length > 0){
    let i = ((message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97) > 31) ?
             (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) :
             (message.charCodeAt(0) - (encodeKey.charCodeAt(0) - 97)) + 95);
    output += String.fromCharCode(i);
    encodeKey = encodeKey.slice(1);
    message = message.slice(1);
  }
  return output;
}

console.log (decode("pineapple", `cpr$q%xno/j sw}/qs((wym to$~~rv $wp${i(} s~r0/q!$a/rzq|w{$st} i}kr$u#to$p{-mn % $$w-xe#$+t`))
