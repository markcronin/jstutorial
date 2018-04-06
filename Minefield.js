var explodes = false
var trigger = 32
var count = 1

for (x = 1; x <= 8; x++){
  if (count % 2 === 0){
    if (explodes === false){
      for ( y = 8; y >= 1; y--){
        var fuse = Math.floor(Math.random() * 65)
        if (fuse === trigger){
          console.log ("row " + x + "; position " + y + " BANG!!!")
          explodes = true;
          break;
        } else {
          console.log ("row " + x + "; position " + y)
        }
      }
    }
  } else {
    if (explodes === false){
      for ( y = 1; y <= 8; y++){
        var fuse = Math.floor(Math.random() * 65)
        if (fuse === trigger){
          console.log ("row " + x + "; position " + y + " BANG!!!")
          explodes = true;
          break;
        } else {
          console.log ("row " + x + "; position " + y)
        }
      }
    }
  }
  count = count + 1
}
