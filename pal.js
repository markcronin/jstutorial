var string = "never odd or even";

function isPalindrome(str){
  let x = str.trim();
  if (x.length > 1){
    if (x.charAt(0) === x.charAt(x.length-1)){
      x = x.slice(1,x.length-1);
      return isPalindrome(x);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

isPalindrome(string) ? console.log ( string + " is a palindrome") :
                       console.log ( string + " is NOT a palindrome")
