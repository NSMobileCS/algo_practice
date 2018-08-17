# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root:
          return []
        outp = []
        curlev = [root]
        while curlev:
          nlev = []
          
          outp.append([x.val for x in curlev if x != None])    
          for node in curlev:
            if node.left:
              nlev.append(node.left)
            if node.right:
              nlev.append(node.right)
          curlev = nlev
        return outp
          
          
          
        
