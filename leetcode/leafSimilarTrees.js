/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */



var getLeaves = function (root, arr) {
    if (!root) return;
    if (root && !(root.left || root.right)) {
        arr.push(root.val);
        return;
    } else {
        if (root.left) {
            getLeaves(root.left, arr);
        }
        if (root.right) {
            getLeaves(root.right, arr);
        }
    }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let r1Leaves = [];
    let r2Leaves = [];
    getLeaves(root1, r1Leaves);
    getLeaves(root2, r2Leaves);
    for (let idx=0; idx<r1Leaves.length; idx++) {
        if (r1Leaves[idx] !== r2Leaves[idx]) return false;
    }
    // console.log(`r1Leaves ${r1Leaves}`);
    // console.log(`r2Leaves ${r2Leaves}`);
    // console.log('\n- - -')
    return true;
};
