/**
 * @param {number[]} nums
 * @return {number}
 */

// v1 a fun way to do it...
var missingNumber = function(nums) {
    let arr = [...Array(nums.length+1).keys()];
    for (let num of nums) {
        delete arr[num];
    }
    return arr.filter(
        x => ( x===0 || !!x ) // filter out removed val's (falsy val's not eq to zero)
    )[0];   // take first (only) elem left
};





// v2 a faster way...
var missingNumber = function(nums) {
    nums.sort( (a, b) => (1.0*a > 1.0*b));
    for (let idx = 0; idx<nums.length+1; idx++) {
        if (nums[idx] !== idx) {
            return idx;
        }
    }
};