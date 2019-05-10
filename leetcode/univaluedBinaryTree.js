/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


var isUnivalTree = function(root) {
    const matchVal = root.val;
    const traverse = (root, val) => {
        // console.log(`root.val: ${root.val}, val: ${val}`);
        if (root.val !== val) return false;
        let res = true;
        if (root.left) {
            if (!traverse(root.left, val)) return false;
        }
        if (root.right) {
            if (!traverse(root.right, val)) return false;
        }
        return true;
    };
    return traverse(root, matchVal);
};
