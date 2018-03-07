module.exports = function minOfRotArr(arr){
    let idx = 0;
    let jdx = arr.length - 1;
    if (arr[idx] < arr[jdx]){ //tells us it must be rotated by 0
        return arr[idx];   //so we return 0th elem.
    }
    while ( (arr[idx] > arr[jdx]) && (idx < jdx) ) {
        let mPoint = Math.floor((idx+jdx)/2);
        if (arr[mPoint] <= arr[idx]) {
            jdx = mPoint;
        } else {
            if (arr[jdx-1] < arr[jdx]) {
                jdx -= 1;
            } else {
                return arr[jdx];
            }
        }
        if (arr[mPoint] >= arr[idx]) {
            idx = mPoint;
        } else {
            if (arr[idx+1] >= arr[idx]){
                idx += 1;
            } else {
                return arr[idx+1];
            }
        }
    }
    return arr[jdx];
}
