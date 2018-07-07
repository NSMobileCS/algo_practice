class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def arr_to_BST(arr0):
    arr1 = sorted(arr0)
    #  sort array beore passing to recursive function closure
    #  defined here, so we don't waste overhead
    #  calling sorted over & over...
    def _a2BST(arr):
        if ( len(arr) < 1 ) or ( len(arr) == 1 and arr[0] == 'None' ):
            return None
        mdx = len(arr) // 2 # mid point index
        root = TreeNode(arr[mdx])
        root.left = _a2BST(arr[:mdx])
        root.right = _a2BST(arr[mdx+1:])
        return root
    return _a2BST(arr1)

def print_BST(root):
    if not root:
        return
    outp = [ [root.val] ]
    print(outp)
    child_nodes = []
    if root.left:
        child_nodes.append(root.left)
    if root.right:
        child_nodes.append(root.right)
    while child_nodes:
        next_child_nodes = []
        row = []
        for node in child_nodes:
            row.append(node.val)
            if node.left:
                next_child_nodes.append(node.left)
            if node.right:
                next_child_nodes.append(node.right)
        outp.append(row)
        child_nodes = next_child_nodes
    line_length = max(map(len, outp))
    for n, line in enumerate(outp):
        tabchars = ' ' * int(line_length / (n+1) )
        line = [''] + list(map(str, line))
        print(tabchars.join(line))
    return outp

arr01 = [1, 2, 20, 30, 36, 40, 55]
tree_root1 = arr_to_BST(arr01)

print_BST(tree_root1)


