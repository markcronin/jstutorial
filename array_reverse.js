var testArray = [1,2,3,["4a","4b","4c"],5,"six",7]

function reverseArray(arr){
  var newArray = [];
  for (let x = arr.length; x > 0; x--){
    newArray.push(arr[x - 1])
  }
  console.log (newArray)
}

reverseArray(testArray)
