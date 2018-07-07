from ..bin_tree_res import print_BST, arr_to_BST

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
    def __str__(self):
        return print_BST(self)
    def __repr__(self):
        return str(self)


class Solution:
    def trimBST(self, root, L, R):
        print(root)
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: TreeNode
        """
        if not root:
            return None
        R_cur = L_cur = root
        # if root.val < L:
        #     root = root.right
        # if root.val > R:
        #     root = root.left
        #     return self.trimBST(root.left, L, R)
        if L_cur.left:
            if root.left.val < L:
                if root.left.right:
                    if
                    root.left = self.trimBST(root.left.right, L, R)
            L_cur = L_cur.left
        else:

        if root.right:
            if root.right.val > R:
                if root.right.left:
                    root.right = self.trimBST(root.right.left, L, R)
        return root

arr02 = [45, 30, 46, 10, 36, 'null', 49, 8, 24, 34, 42, 48, 'null', 4, 9, 14, 25, 31, 35, 41, 43, 47, 'null', 0, 6, 'null', 'null', 11, 20, 'null', 28, 'null', 33, 'null', 'null', 37, 'null', 'null', 44, 'null', 'null', 'null', 1, 5, 7, 'null', 12, 19, 21, 26, 29, 32, 'null', 'null', 38, 'null', 'null', 'null', 3, 'null', 'null', 'null', 'null', 'null', 13, 18, 'null', 'null', 22, 'null', 27, 'null', 'null', 'null', 'null', 'null', 39, 2, 'null', 'null', 'null', 15, 'null', 'null', 23, 'null', 'null', 'null', 40, 'null', 'null', 'null', 16, 'null', 'null', 'null', 'null', 'null', 17]

tree_root2 = arr_to_BST(arr02)
print_BST(tree_root2)

trimmed_tree = Solution.trimBST(tree_root2)
print_BST(trimmed_tree)