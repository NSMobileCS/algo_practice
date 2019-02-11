/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let cur = root;
    if (!root) return new TreeNode(val);
    while (cur) {
        if (!cur.left  && !cur.right) {
            if (val < cur.val) {
                cur.left = new TreeNode(val);
            } else {
                cur.right = new TreeNode(val);
            }
            return root;
        }
        if (val < cur.val) {
            if (cur.left) {
                cur = cur.left;
            } else {
                cur.left = new TreeNode(val);
                return root;
            }
        } else { // val > cur.val
            if (cur.right) {
                cur = cur.right;
            } else {
                cur.right = new TreeNode(val);
                return root;
            }
        }
    }
    return root;
};
