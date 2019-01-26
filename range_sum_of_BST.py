# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rangeSumBST(self, root, L, R):
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: int
        """
        nodes_to_check = []
        if not root:
            return 0 #or None?
        sum_val = 0
        if L <= root.val <= R:
            sum_val = root.val
            if root.left:
                nodes_to_check.append(root.left)
            if root.right:
                nodes_to_check.append(root.right)
        elif root.val < L:
            if root.right:
                nodes_to_check.append(root.right)
        elif root.val > R:
            if root.left:
                nodes_to_check.append(root.left)
        while nodes_to_check:
            next_nodes = []
            for node in nodes_to_check:
                if L <= node.val <= R:
                    sum_val += node.val
                    if node.left:
                        next_nodes.append(node.left)
                    if node.right:
                        next_nodes.append(node.right)
                elif node.val < L:
                    if node.right:
                        next_nodes.append(node.right)
                elif node.val > R:
                    if node.left:
                        next_nodes.append(node.left)
            nodes_to_check = next_nodes
        return sum_val
