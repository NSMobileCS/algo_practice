# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def buildTree(self, inorder, postorder):
        """
        :type inorder: List[int]
        :type postorder: List[int]
        :rtype: TreeNode
        """
        if not inorder:
            return None
        root = TreeNode(postorder.pop())
        rdx = inorder.index(root.val)
        l_inord = inorder[:rdx]
        r_inord = inorder[rdx+1:]
        if l_inord:
            if len(l_inord) == 1:
                root.left = TreeNode(l_inord[0])
            else:
                root.left = self.buildTree(l_inord, postorder)
        if r_inord:
            if len(r_inord) == 1:
                root.right = TreeNode(r_inord[0])
            else:
                root.right = self.buildTree(r_inord, postorder)
        return root
