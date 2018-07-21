from bin_tree_res import TreeNode, arr_to_BST
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

    def sum_nodes(self, node):
        s = 0
        if node:
            if not (node.val or node.left or node.right):
                print('returning 0')
                return 0
            if node.val:
                s += val
            if node.left:
                s += self.sum_nodes(node.left)
            if node.right:
                s += self.sum_nodes(node.right)

        return s
