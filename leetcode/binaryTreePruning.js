/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var pruneTree = function(root) {
  let legs = 2;
  if (root.left) {
    root.left = pruneTree(root.left);
  } else {
    legs -= 1;
  }
  if ( root.right ) {
    root.right = pruneTree(root.right);
  } else {
    legs -= 1;
    // now if legs == 0, we're on a terminal node.
  }
  if (  (legs == 0) || ( (root.right == null && root.left == null) )  ) {
    if (root.val == 0) return null;
  }
  return root;
};






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

// var pruneTree = function(root) {
//   console.log(root);
//   let mustKeep = false;
//   if ( root.left ) {
//     root.left = pruneTree(root.left);
//   } else {
//     root.left = null;
//   }
//   if ( root.right ) {
//     root.right = pruneTree(root.right);
//   } else {
//     root.right = null;
//   }
//   return root;
// };
