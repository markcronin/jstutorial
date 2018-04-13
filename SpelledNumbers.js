var w = [" and ","one","two","three","four","five",
            "six","seven","eight","nine","ten",
            "eleven","twelve","thir","teen","fif",
            "twen","eigh","ty","ty-","hundred","thousand, ","for"]

var rand = Math.floor(Math.random() * 1000000);
console.log (rand)

function digit_array(num){
  var string = num.toString();
  var length = string.length;
  var fullString = function(x){
      output ="";
      for (y = 1; y <= x; y++){
        output += "0";}
        return output;} (6-length) + string;
  var output = [];
  for (x = 0; x < 6; x++){
    output.push(Number(fullString.charAt(x)));
  }
  return output;
}

var arr = digit_array(rand)
//var arr = [1,0,1,0,0,2];

function makeNumber(array){
  if (arr[0] > 0){
    var x = arr[0];
    var output6 = prints_1_9(arr[0]) + "-" + w[20];
  } else {
    output6 = "";
  }
  if (arr[1] > 0){
    var x = arr[1];
    var output5 = decide_and_tens(arr[0]) + prints_tens(arr[1],arr[2]) + decide_ty(arr[1],arr[2]);
  } else {
    output5 = "";
  }
  if ((arr[2] > 0) && (arr[1] != 1)){
    var x = arr[2];
    var output4 = decide_and_singles(arr[1],arr[0]) + prints_1_9(arr[2]) + " " + w[21];
  } else if (arr[0] + arr[1] + arr[2] === 0){
    var output4 = "";
  } else {
    output4 = " " + w[21];
  }
  if (arr[3] > 0){
    var x = arr[3];
    var output3 = prints_1_9(arr[3]) + "-" + w[20];
  } else {
    output3 = "";
  }
  if (arr[4] > 0){
    var x = arr[4];
    var output2 = decide_and_tens(arr[3]) + prints_tens(arr[4],arr[5]) + decide_ty(arr[4],arr[5])
  } else {
    output2 = "";
  }
  if ((arr[5] > 0) && arr[4] != 1){
    var x = arr[5];
    var output1 = decide_and_singles2(arr[4],arr[3]) + prints_1_9(arr[5]);
  } else {
    output1 = "";
  }
  return output6+output5+output4+output3+output2+output1;
}

console.log (arr);
var answer = makeNumber (arr);
console.log (answer);

function prints_1_9(x){
  if (x === 1){
    return w[1];
  } else if (x === 2){
    return w[2];
  } else if (x === 3){
    return w[3];
  } else if (x === 4){
    return w[4];
  } else if (x === 5){
    return w[5];
  } else if (x === 6){
    return w[6];
  } else if (x === 7){
    return w[7];
  } else if (x === 8){
    return w[8];
  } else {
    return w[9];
  }
}

function prints_tens(x,y){
    if (x === 1){
      if (y === 0){
        return w[10];
      } else if (y === 1){
        return w[11];
      } else if ( y === 2){
        return w[12];
      } else if (y === 3){
        return w[13] + w[14];
      } else if (y === 5){
        return w[15] + w[14];
      } else {
        return prints_1_9(y) + w[14];
      }
  } else if (x === 2){
    return w[16];
  } else if (x === 3){
    return w[13];
  } else if (x === 4){
    return w[22];
  } else if (x === 5){
    return w[15];
  } else if (x === 6){
    return w[6];
  } else if (x === 7){
    return w[7];
  } else if (x === 8){
    return w[17];
  } else {
    return w[9];
  }
}

function decide_ty(arr_num1,arr_num2){
  if (arr_num1 === 1){
    return "";
  } else if (arr_num2 === 0){
    return w[18];
  } else {
    return w[19];
  }
}

function decide_and_tens(arr_num){
  if (arr_num === 0){
    return "";
  } else {
    return w[0];
  }
}

function decide_and_singles(arr_num1,arr_num2){
  if ((arr_num1 === 0) && (arr_num2 === 0)){
    return "";
  } else if (arr_num1 === 0){
    return w[0];
  } else {
    return "";
  }
}

function decide_and_singles2(arr_num1,arr_num2){
  if ((arr_num1 === 0) && (arr_num2 === 0)){
    return w[0];
  } else if (arr_num1 === 0){
    return w[0];
  } else {
    return "";
  }
}
