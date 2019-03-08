const isGood = function (N) {
    const digiMap = {
        0: 0,
        1: 1,
        2: 5,
        3: null,
        4: null,
        5: 2,
        6: 9,
        7: null,
        8: 8,
        9: 6,
    };
    let n = '' + N;
    rotStr = '';
    for (let idx=0; idx<n.length; idx++) {
        let k = digiMap[n[idx]];
        if (k === null) return false;
        rotStr += k;
    }
    return (Number.parseInt(rotStr) !== N);
};


/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let nums = [...Array(N+1).keys()].slice(1);
    let res = 0;
    nums.forEach(x => isGood(x) ? (res += 1): {} );
    return res;
}
