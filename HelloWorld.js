console.log ("Hello World");

// Single line comment

/*

Multi
line
Comment

*/

for( let x = 0 ; x <= 10 ; x++ ){
  console.log(x)
}

let y = 0;
while(y <= 10){
  console.log (y);
  y++;
}

let z = 0;
while(z <= 10){
    if( z % 2 === 0){
      console.log (z + " EVEN");
    } else {
      console.log (z);
    }
    z++;
}

function greeting(name){
  const prefix = "Hello";
  console.log (prefix + " " + name);
}

greeting ("Thomas");
