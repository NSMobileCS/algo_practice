"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def __init__(self):
        self.arr = []
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        self._levelorder(root)
        res = []
        if self.arr:
            for lvl in self.arr[::-1]:
                res += lvl
        return res
    def _levelorder(self, root):
        if not (root and root.val):
            return []
        ch_arr = [root]
        while ch_arr:
            self.arr.append([node.val for node in ch_arr])
            nxt_ch_arr = []
            for ch in ch_arr:
                if ch.children:
                    nxt_ch_arr += ch.children
            ch_arr = nxt_ch_arr

