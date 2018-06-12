/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var averageOfLevels = function(root) {
  let outp = [ root.val ];
  let nexts = [];
  if (root.left) {
    nexts.push(root.left);
  }
  if (root.right) {
    nexts.push(root.right);
  }
  while ( nexts && nexts.length > 0 ) {
    let n = 0;
    let sum = 0;
    let newNexts = [];
    nexts.forEach(
      (node) => {
        if (!node) return;
        ++n;
        sum += (node.val || 0);
        if (node.left) newNexts.push(node.left);
        if (node.right) newNexts.push(node.right);
      }
    );
    outp.push( sum/n );
    nexts = newNexts;
  }
  return outp;
};
