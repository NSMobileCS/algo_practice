/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const treeSum = function(root) {
    // console.log(root);
    if (!root || root == null) return 0;
    if (root && (root.left == null) && (root.right == null) ) return root.val; 
    let lVar;
    lVar = rVar = 0;
    if (root.left) {
        lVar = treeSum(root.left);
    }
    if (root.right) {
        rVar = treeSum(root.right);
    }
    return Math.abs(lVar - rVar);
};

var findTilt = treeSum;
