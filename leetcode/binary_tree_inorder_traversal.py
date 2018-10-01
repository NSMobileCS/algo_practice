# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  def inorderTraversal(self, root):
    """
    :type root: TreeNode
    :rtype: List[int]
    """
    outp = []
    self._travToArr(root, outp)
    return outp
        
  def _travToArr(self, root, arr):
    if not root or not root.val: 
      return
    if root.left:
      self._travToArr(root.left, arr)
    arr.append(root.val)
    if root.right:
      self._travToArr(root.right, arr)
      
