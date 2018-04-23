// takes hex colour input and converts it to RBG
// eg "#ffc031" returns "rgb(255,192,49)"
function toDec(input){
  input = input.split("");
  var red =   parseInt((input[1] + input[2]), 16);
  var green = parseInt((input[3] + input[4]), 16);
  var blue =  parseInt((input[5] + input[6]), 16);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

// takes RGB colour values as input and converts it to hex colour
// eg "rgb(255,192,49)" returns "#ffc031"
function toHex(input){
  input = input.slice(4);
  input = input.slice(0,-1);
  input = input.split(",");
  return "#" + ((Number(input[0])).toString(16) +
                (Number(input[1])).toString(16) +
                (Number(input[2])).toString(16)).toUpperCase();
}

// determines the direction of conversion
// based on the lenght on the input string
function convertColour(input){
  if ( input.length === 7 ) {
    return toDec(input);
  } else {
    return toHex(input);
  }
}

const input = process.argv[2];
console.log(convertColour(input));
