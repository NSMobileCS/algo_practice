/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = {};
    let n1Map = {};
    for (let n of nums1) {
        n1Map[n] = true;
    }
    for (let m of nums2) {
        if (n1Map[m]) {
            res[m] = true;
        }
    }
    return Object.keys(res);
};
