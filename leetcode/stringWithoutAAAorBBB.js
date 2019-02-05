// Given two integers A and B, return any string S such that:
//
// S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
// The substring 'aaa' does not occur in S;
// The substring 'bbb' does not occur in S.

// if A > 5 and B < 2 no solution exists(?)


/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let res = [];
    while (A || B) {
        if (A > B) {
            if (res.length > 1) {
                if ( (res[res.length-1] == 'a') && (res[res.length-2] == 'a') ) {
                    res.push('b');
                    B -= 1;
                } else {
                    res.push('a');
                    A -= 1;
                }
            } else {
                res.push('a');
                A -= 1;
            }
        } else {
            if (res.length > 1) {
                if ( (res[res.length-1] == 'b') && (res[res.length-2] == 'b') ) {
                    res.push('a');
                    A -= 1;
                } else {
                    res.push('b');
                    B -= 1;
                }
            } else {
                res.push('b');
                B -= 1;
            }
        }
    }
    return res.join('');
};


console.log(4, 2);
console.log(strWithout3a3b(4, 2));
console.log('---');
console.log(1, 2);
console.log(strWithout3a3b(1, 2));
console.log('---');