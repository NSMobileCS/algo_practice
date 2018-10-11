"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        self.arr = []
        if not root:
            return []
        self._preord(root)
        return self.arr

    def _preord(self, root):
        if not root:
            return
        self.arr.append(root.val)
        if root.children:
            for ch in root.children:
                self._preord(ch)

