/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = [...Array(nums.length+1).keys()];
    for (let num of nums) {
        delete arr[num];
    }
    return arr[0];
};
