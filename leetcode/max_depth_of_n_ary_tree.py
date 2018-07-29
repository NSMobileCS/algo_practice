"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: Node
        :rtype: int
        """
        if not root:
            return 0
        if root.children:
            child_nodes = root.children
        else:
            return 1 # if we have a root, but no child nodes
        depth = 1
        while child_nodes:
            depth += 1
            next_child_nodes = []
            for node in child_nodes:
                if node.children:
                    next_child_nodes += node.children
            child_nodes = next_child_nodes
        return depth
