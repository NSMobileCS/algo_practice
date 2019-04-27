/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target, start, end) {
  if (nums.length < 1) return -1;
  if (start === undefined){
    start = 0;
  }
  if (end === undefined) {
    end = nums.length;
  }
  if (end - start < 4) {
    for (let idx = start; idx < end; idx++) {
      if (nums[idx] === target) return (idx);
    }
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) return (mid);
  if (nums[mid] > target) {
    return search(nums, target, start, mid);
  } else {
    return search(nums, target, mid, end);
  }
};
