/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var treeSum = function (root) {
    if (!root) return;
    let n = root.val || 0;
    if (root.right) {
        n += treeSum(root.right);
    }
    if (root.left) {
        n += treeSum(root.left);
    }
}

var convertBST = function(root) {
    if (!root) return;
    if (root.right) {
        root.right = convertBST(root.right);
    }
};
