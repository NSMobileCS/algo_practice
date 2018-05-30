function bubbleSort(arr) {
  for (let idx=0; idx<arr.length-1; idx++) {
    if (arr[idx] > arr[idx+1]) {
      let temp = arr[idx];
      arr[idx] = arr[idx+1];
      arr[idx+1] = temp;
      return bubbleSort(arr);
    }
  }
  return arr;
}

let arr = [10,2,4,3];

console.log('arr, ', arr);
console.log(bubbleSort(arr));
