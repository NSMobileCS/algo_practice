/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

const trimBST = function(root, L, R) {
    if ( !root ) return root;
    let validRoot;
    if ( root && root.val >= L && root.val <= R ) {
        validRoot = root;
    }
    let runner = root;
    let nextRow = [root.left, root.right];
    if (root.left) {
        if (root.left && root.left.right) {
            nextRow[0] = root.left = root.left.right;
        }
    }
    if (root.right) {
        if (root.right.right)
    }
    while (nextRow) {
        let preNextRow = [];
        nextRow.forEach( node => {
            if (node && node.val) {}
        })
    }
};

