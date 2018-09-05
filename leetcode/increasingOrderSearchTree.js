
//  * Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    if (!root) return;
    let newRoot, cur;
    if (root.left) {
        newRoot = increasingBST(root.left);
        root.left = null;
        cur = newRoot;
        while (cur.right) {
            cur = cur.right;
        }
        cur.right = root;
        cur = root;
        root = newRoot;
    } else {
        cur = newRoot = root;
    }
    if (cur.right) { // cur must be pointing at our orig root
        cur.right = increasingBST(cur.right)
    }
    return root;
}


let root = new TreeNode(3)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.right = new TreeNode(12)

let res = increasingBST(root);
console.log(res);