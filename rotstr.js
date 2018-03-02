function rotArr(arr, rotBy){
  var len = arr.length;
  var count = 1;
  var idx = 0;
  var jdx = rotBy % len;
  var ivar = arr[idx];
  var jvar = arr[jdx];
  
  while (count < len){
    arr[jdx] = ivar;
    ivar = jvar;
    idx = jdx;
    jdx = (jdx+rotBy)%len;
    jvar = arr[jdx];
    count += 1;
  }
  arr[jdx] = ivar;
  return arr;
}


for (let n=0;n<5;n++){
  var arr = ['a', 'b', 'c', 'd'];;
  console.log("_______________________");
  console.log("_______________________");
  console.log(arr);
  console.log(n+": ");
  console.log(rotArr(arr,n));
  console.log("_______________________");
  console.log("_______________________");
}

