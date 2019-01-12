# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def _init__(self):
        self.val = None

    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if self.val is None:
            self.val = root.val
        else:
            if root.val != self.val:
                return False
        if root.left and root.right:
            return self.isUnivalTree(root.left) and self.isUnivalTree(root.right)
        elif root.left:
            return self.isUnivalTree(root.left)
        elif root.right:
            return self.isUnivalTree(root.right)
        return True

