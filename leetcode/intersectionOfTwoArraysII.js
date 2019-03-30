// Given two arrays, write a function to compute their intersection.
//
// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  [nums1, nums2] =   [nums1.join(''), nums2.join('')];
  let maxDif = nums2.length;
  let curMax = '';
  for (let idx=0; idx<nums1.length; idx++) {
    for (let ofsdx=curMax.length; ofsdx<maxDif+1; ofsdx++) {
      if (ofsdx + idx > maxDif) {
        if (curMax.length == maxDif) {
          return curMax.split('').map(n=>(1.0)*n);
        } else {
          break;
        }
      }
      let tmp = n1.slice(cdx, cdx+ofsdx);
      let fdx = n2.indexOf()
    }
  }
};
