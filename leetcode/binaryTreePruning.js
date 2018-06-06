/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */

// hasNonZerVal = function (root) {
//   if (root.val && root.val == 1) return true;
//   if ( root.left) {
//     if (hasNonZerVal( root.left) ) return true;
//   }
//   if ( root.right ) {
//     if (hasNonZerVal(root.right) ) return true;
//   }
//   return false;
// }

var pruneTree = function(root) {
  console.log(root);
  let mustKeep = false;
  if ( root.left ) {
    root.left = pruneTree(root.left);
  } else {
    root.left = null;
  }
  if ( root.right ) {
    root.right = pruneTree(root.right);
  } else {
    root.right = null;
  }
  return root;
};
