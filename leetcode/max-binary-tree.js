
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if ( nums.length < 1 ) return null;
  let nMax = Math.pow(2,31) * (-1);
  let ndx = -1;
  for (let idx=0;idx<nums.length;idx++) {
    if (nums[idx] > nMax) {
      nMax = nums[idx];
      ndx = idx;
    }
  }
  let root = new TreeNode(nums[ndx]);
  if ( ndx > 0 ) {
    root.left = constructMaximumBinaryTree(nums.slice(0, ndx));
  } else {
    root.left = null;
  }
  if ( ndx < nums.length -1 ) {
    root.right = constructMaximumBinaryTree(nums.slice(ndx+1));
  } else {
    root.right = null;
  }
  return root;
};
