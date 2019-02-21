/**
 * @param {number} n
 * @return {number}
 */
var mapping = {
    1:1,
    2:2,
    3:3,
};

var climbStairs = function(n) {
    if (mapping[n]) return mapping[n];
    let res = climbStairs(n-1) + climbStairs(n-2);
    mapping[n] = res;
    return res;
};


for (let idx=1; idx<20; idx++) {
    console.log(idx);
    console.log(climbStairs(idx));
}