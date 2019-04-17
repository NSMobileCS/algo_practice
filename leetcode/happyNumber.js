/**
 * @param {number} n
 * @return {boolean}
 */


const digiSum = function (n) {
    let sum = 0;
    n.toString().split('').forEach(
        x => sum += Math.pow(0.0+x, 2)
    );
    return sum;
}

var isHappy = function(n) {
    const sums = {n: true};
    for ( ; ; ) {
        let val = digiSum(n);
        if (val === 1) {
            return true;
        }
        if (sums[val]) {
            return false;
        }
        sums[val] = true;
        n = val;
    }
};
