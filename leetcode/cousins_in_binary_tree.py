# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        if not root:
            return False
        level = []
        targets = [x, y]
        if root.left:
            level.append(root.left)
        if root.right:
            level.append(root.right)
        while level:
            next_level = []
            for n in level:
                if n.left:
                    next_level.append(n.left)
                    if n.left.val in targets:
                        targets.pop(targets.index(n.left.val))
                        if n.right and n.right.val in targets:
                            return False  # sibling not cousin
                if n.right:
                    next_level.append(n.right)
                    if n.right.val in targets:
                        targets.pop(targets.index(n.right.val))
            if not targets:
                return True
            elif len(targets) == 1:
                return False
            else:
                level = next_level
        return False

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# class Solution:
#     def isCousins(self, root: 'TreeNode', x: 'int', y: 'int') -> 'bool':
#         if not root:
#             return False
#         child_nodes = []
#
#         if root.left:
#             child_nodes.append(root.left)
#         if root.right:
#             child_nodes.append(root.right)
#         while child_nodes:
#             new_child_nodes = []
#             parent_nodes = {}
#             found_target_x = found_target_y = False
#             for node in child_nodes:
#                 if node.left:
#                     new_child_nodes.append(node.left)
#                     parent_nodes[node.left.val] = node
#                     if node.left.val == y:
#                         found_target_y = True
#                     if node.left.val == x:
#                         found_target_x = True
#                 if node.right:
#                     new_child_nodes.append(node.right)
#                     parent_nodes[node.right.val] = node
#                     if node.right.val == y:
#                         found_target_y = True
#                     if node.right.val == x:
#                         found_target_x = True
#             if found_target_x:
#                 y_list = [node for node in new_child_nodes if node.val == y]
#                 if not y_list:
#                     return False
#                 if parent_nodes[x] is parent_nodes[y_list[0]]:
#                     return False # they're siblings not cousins
#                 else:
#                     return True
#             if found_target_y:
#                 x_list = [node for node in new_child_nodes if node.val == x]
#                 if not x_list:
#                     return False
#                 if parent_nodes[y] is parent_nodes[x_list[0]]:
#                     return False # they're siblings not cousins
#                 else:
#                     return True
#             child_nodes = new_child_nodes
#         return False



# [1,2,3,null,4]
# 2
# 3


# [1,2,3,null,4,null,5]
# 5
# 4