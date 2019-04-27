/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let lastChar = null;
    let lastCharStartIdx = null;
    let lastCharCount = 0;
    let res = [];
    for (let idx=0; idx < S.length; idx++) {
        let ch = S[idx];
        if (ch === lastChar) {
            lastCharCount++;
        } else {
            if (lastChar && lastCharCount > 2) {
                res.push([lastCharStartIdx, idx-1]);
            }
            lastChar = ch;
            lastCharStartIdx = idx;
            lastCharCount = 1;
        }
    }
    if (lastChar && lastCharCount > 2) {
        res.push([lastCharStartIdx, S.length-1]);
    }
    return res;
};
