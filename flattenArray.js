var array = [1,2,3,[4,5,6],7,8,[9,[10,11,12,[13,14,[15,16]]]]]

console.log (array.length)

var output = []

function flattenArray(arr){
  for (let x = 0; x < arr.length; x++){
    if (Array.isArray(arr[x]) === true){
      flattenArray(arr[x])
    } else {
    output.push(arr[x]);
    }
  }
}

flattenArray(array)

console.log (output)
