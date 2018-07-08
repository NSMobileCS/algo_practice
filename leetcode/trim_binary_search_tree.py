from bin_tree_res import print_BST, arr_to_BST

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
        if root.val < L:
            return self.trimBST(root.right, L, R)
        if root.val > R:
            return self.trimBST(root.left, L, R)
        while L_cur.left:
            if L_cur.left.val < L:
                if root.left.right:
                    L_cur.left = L_cur.left.right
            L_cur = L_cur.left
        while R_cur.right:
            if R_cur.right.val > R:
                if R_cur.right.left:
                    R_cur.right = R_cur.right.left
            R_cur = R_cur.right
        return root

arr02 = [45, 30, 46, 10, 36, 'null', 49, 8, 24, 34, 42, 48, 'null', 4, 9, 14, 25, 31, 35, 41, 43, 47, 'null',
    0, 6, 'null', 'null', 11, 20, 'null', 28, 'null', 33, 'null', 'null', 37, 'null', 'null', 44, 'null', 'null',
    'null', 1, 5, 7, 'null', 12, 19, 21, 26, 29, 32, 'null', 'null', 38, 'null', 'null', 'null', 3, 'null', 'null',
    'null', 'null', 'null', 13, 18, 'null', 'null', 22, 'null', 27, 'null', 'null', 'null', 'null', 'null', 39, 2,
    'null', 'null', 'null', 15, 'null', 'null', 23, 'null', 'null', 'null', 40, 'null', 'null', 'null', 16, 'null',
    'null', 'null', 'null', 'null', 17]

arr02 = list([x for x in arr02 if x != 'null'])
print('pre-trim:')
tree_root2 = arr_to_BST(arr02)
print(tree_root2)
print('-_-_'*4)
print('post-trimming:')
S = Solution()
trimmed_tree = S.trimBST(tree_root2, 32, 44)
print(trimmed_tree)
