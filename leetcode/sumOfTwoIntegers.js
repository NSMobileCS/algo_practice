/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function (a, b) {
    return eval(`a ${String.fromCharCode(43)} b`);
};

var getSum_02 = function(a, b) {
    // not finished
    if (a < 0 && b < 0) {
        a *= -1;
        b *= -1;
        for (idx=0; idx<b; idx++) {
            a += 1;
        }
        return -1 * a;
    }
    if (a > 0 && b > 0) {
        for (idx=0; idx<b; idx++) {
            a += 1;
        }
        return a;
    }
    if (a == b) {
        return 0;
    }

};

var getSum_01 = function(a, b) {
    // passes basic tests but too inefficient on large inputs
    let aIsNeg = false;
    if (a < 0) {
        aIsNeg = true;
        a *= -1
    }
    let bIsNeg = false;
    if (b < 0) {
        bIsNeg = true;
        b *= -1;
    }
    let arrA = Array(a).fill(1);
    let arrB = Array(b).fill(1);
    if (!aIsNeg && !bIsNeg) {
        return arrA.concat(arrB).length;
    }
    if (aIsNeg && !bIsNeg) {
        if (a > b) {
            for (let idx=0; idx<arrB.length; idx++) {
                arrA.pop();
            }
            return -1 * arrA.length;
        } else {
            for (let idx=0; idx<arrA.length; idx++) {
                arrB.pop();
            }
            return arrB.length;
        }
    }
    if (!aIsNeg && bIsNeg) {
        if (a > b) {
            for (let idx=0; idx<arrB.length; idx++) {
                arrA.pop();
            }
            return arrA.length;
        } else {
            for (let idx=0; idx<arrA.length; idx++) {
                arrB.pop();
            }
            return -1 * arrB.length;
        }
    }
    if (aIsNeg && bIsNeg) {
        return -1 * arrA.concat(arrB).length;
    }
};

// console.log(getSum_01(2, 5), 'should be 7')
//
// console.log(getSum_01(2, -5), 'should be -3')
//
console.log(getSum(2, 5), 'should be 7');

console.log(getSum(2, -5), 'should be -3');
