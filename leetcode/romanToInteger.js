/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const values = {'C': 100, 'D': 500, 'M': 1000, 'I': 1, 'L': 50, 'V': 5, 'X': 10};
    let res = 0;
    let lastPos = 0;
    for (let idx=s.length-1; idx>-1; idx--) {
        let char = s[idx];
        let charPos = numerals.indexOf(char);
        if (lastPos > charPos) {
            res -= values[char];
        } else {
            res += values[char];
            lastPos = charPos;
        }
    }
    return res;
};



let tests = [
    ["IX", 9],
    ["LVIII", 58],
    ["MCMXCIV", 1994],
];

for (let t of tests) {
    console.log(romanToInt(t[0]));
    console.log(`^should be ${t[1]}
    
                                    `);
}

