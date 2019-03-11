// sqrt(3) = 1.73.. floor to integer = 1
// sqrt(4) = 2

/**
 * @param {number} x
 * @return {number}
 */

// var mySqrt = function(x) {
//     let lastVal = x;
//     let candVal = x >> 1;
//     let sqCV = candVal * candVal;
//     while (sqCV != x) {
//         if ()
//     }
// }

var mySqrt = function(x) {
    if (x < 5) { // 5 & above handled correctly by Math.ceil further down
        if (x == 0) return 0; // {0} -> 0
        if (x < 4) return 1;   // {1,2,3} -> 1
        return 2; // {4} -> 2;
    }
    let lVal = 0;
    let rVal = Math.ceil(x/2);
    // const range = [...Array(Math.ceil(x/2)).keys()];
    // let ldx = 0;
    // let rdx = range.length - 1;
    while ( (rVal > lVal) && (rVal - lVal > 1) ) {
        let mVal = Math.floor((rVal + lVal) / 2);
        let sQ = mVal * mVal;
        if (sQ > x) {
            rVal = mVal;
            continue;
        }
        if (sQ < x) {
            lVal = mVal;
        } else {
            return mVal;
        }
    }

    return lVal;
};

for (let i=0; i<13; i++) console.log(`n: ${i},  mySqrt(i): ${mySqrt(i)}`);