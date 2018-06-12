/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  let val = 0;
  if (t1 == null) return t2;
  if (t2 == null) return t1;
  if ( t1 && t1.val ) val += t1.val;
  if ( t2 && t2.val ) val += t2.val;
  let root = new TreeNode(val);
  if ( (t1 && t1.left) || (t2 && t2.left) ) {
    root.left = mergeTrees(t1.left, t2.left);
  }
  if ( (t1 && t1.right) || (t2 && t2.right) ) {
    root.right = mergeTrees(t1.right, t2.right);
  }
  return root;
};