/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // fast fail path 1
    if (s1.length > s2.length) return false;
    // fast fail 2
    for (let ch of s1) {
        if (s2.indexOf(ch) == -1) return false;
    }
    // checking whether s2 can contain permutation
    // should be faster than iterating thru permutations
    for (let idx=0; idx<s2.length; idx++){
        if (s1.indexOf(s2[idx]) == -1) continue;
        let okMatch = true;
        let buf = s1.split('');
        for (let ofs = 0; ofs < s1.length; ofs++) {
            let char = s2[idx+ofs];
            if (buf.indexOf(char) == -1) {
                okMatch = false;
                break;
            } else {
                buf.splice(buf.indexOf(char), 1);
            }
        }
        if ( okMatch && (buf.length == 0) ) return true;
    }
    return false;
};


// probably works, but not quick enough to pass OJ...
// am going to try an approach w/ sets in python
// because javascript sets kinda suck.
