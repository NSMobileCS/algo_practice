function MaxMinAve(arr){
  if (!arr || arr.length < 1 ) return null;
  var sum = 0;
  var obj = {
    max: arr[0],
    min: arr[0],
    avg: arr[0]
  }

  for (var i=0; i<arr.length; i++) {
    if (arr[i] > obj.max) {
      obj.max = arr[i];
    }
    if (arr[i] < obj.min ) {
      obj.min = arr[i];
    }
    sum += arr[i];
  }
  obj.avg = sum / arr.length;
  return obj;
}



let arr1 = [1,1,1,1,3,3,3,3];



let arr2 = [0,0,0,0,10];


console.log('arr1', arr1);
console.log('-');
console.log(MaxMinAve(arr1));
console.log('- __ -- _ -- __ - __- __ -- _ -- __ - __- __ -- _ -- __ - __- __ -- _ -- __ - __ ');

console.log('arr2', arr2);
console.log('-');
console.log(MaxMinAve(arr2));