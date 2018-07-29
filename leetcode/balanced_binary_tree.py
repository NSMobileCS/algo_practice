class Solution:
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        rscore = lscore = 1
        if root.right:
            rscore = self.depthBalance(root.right)
            if rscore == False:
                return False
        if root.left:
            lscore = self.depthBalance(root.left)
            if lscore == False:
                return False
        if abs(lscore - rscore) > 1:
            return False
        return True


    def depthBalance(self, root):
        if not root:
            return 1
        rscore = lscore = 1
        if root.right:
            rscore = self.depthBalance(root.right)
            if rscore == False:
                return False
        if root.left:
            lscore = self.depthBalance(root.left)
            if lscore == False:
                return False
        if abs(lscore - rscore) > 1:
            return False
        return max(lscore, rscore) + 1
