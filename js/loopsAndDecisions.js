function compareTo10(n) {
  if (n < 10) {
    console.log('Value is less than 10');
  } else if (n > 10) {
    console.log('Value is greater than 10');
  } else {
    // this block is run if all other conditions in this
    // statement are false
    console.log('Value is exactly 10')
  }
}

function switch123(n) {
  switch (n) {
    case 1:
      console.log("n is 1");
      break;
    case 2:
      console.log("n is 2");
      break;
    case 3:
      console.log("n is 3");
      break;
    default:
      console.log("n is an unhandled number");
      break;
  }
}

function forLoop() {
  for(var i=0; i < 10; i++) {
    console.log(i);
  }
}

function logArray(arr) {
  for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop() {
  var i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}
