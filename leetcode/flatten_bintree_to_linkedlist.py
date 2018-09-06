# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        stack = []
        if not root:
            return
        cur = root
        while cur and (cur.left or cur.right or stack):
            if cur.left:
                if cur.right:
                    stack.append(cur.right)
                cur.right = cur.left
                cur.left = None
                cur = cur.right
            else:
                if cur.right:
                    cur = cur.right
                elif stack:
                    cur.right = stack.pop()
                    cur = cur.right

