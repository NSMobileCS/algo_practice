/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
    // let l = S.split(new RegExp(`${C}{1}`, 'g'));
    let sLen = S.length;
    let outp = (new Array(sLen)).fill(sLen-1);
    let delimCharIndices = [];
    let idx=0;
    while (idx < sLen) {
        console.log(idx);
        if ( S[idx] == C ) {
            console.log('entered');
            outp[idx] = 0;
            for (let offs=0; offs<sLen ; offs++) {
                if (outp[jdx] > jdx) {
                    outp[jdx+idx] = jdx;
                } else {
                    break;
                }
            }
            for (let ndx=0; idx+ndx > -1; ndx--) {
                let jdx = -1 * ndx;
                if (outp[ndx+idx] < jdx) {
                    outp[jdx+idx] = jdx;
                } else {
                    break;
                }
            }
        }
        idx++;
    }
    return outp;
};

let S1 = "loveleetcode";
let C1 = "e";

let ans = shortestToChar(S1, C1);
console.log(ans);