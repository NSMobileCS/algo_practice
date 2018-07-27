# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        cur_lvl_nodes = [ root ]
        cur_depth = 0
        while root and cur_lvl_nodes:
            next_lvl_nodes = []
            for node in cur_lvl_nodes:
                if node and node.left:
                    next_lvl_nodes.append(node.left)
                if node and node.right:
                    next_lvl_nodes.append(node.right)
            cur_lvl_nodes = next_lvl_nodes
            cur_depth += 1
        return cur_depth