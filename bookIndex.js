function indexFormList(arr) {
    let outp = [];
    for (let idx = 0; idx<arr.length; idx++) {
        let n = 0;
        let partial = [ arr[idx] ];
        for (let jdx = idx + 1; jdx < arr.length; jdx++) {
            ++n;
            if ( (arr[jdx] - n) == arr[idx] ) {
                partial[1] = arr[jdx];
            } else {
                break;
            }
        }
        if ( partial.length == 2 ) {
            // we have collected at least 2 consecutive nums, so we format accordingly & skip idx fwds.
            outp.push(`${partial[0]}-${partial[1]}`);
            idx += n;
        } else {
            outp.push(`${partial[0]}`);
        }
    }
    return outp.join(', ');
}

let arr1 = [1,13,14,15,17,18,70];

console.log(arr1);
console.log(indexFormList(arr1));