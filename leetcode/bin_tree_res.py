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

def print_BST(root, char_space_per_node=10):
    if not root:
        return
    outp = [ [root.val] ]
    print(outp)
    child_nodes = []
    if root.left:
        child_nodes.append(root.left)
    if root.right:
        child_nodes.append(root.right)
    outp.append(list(map(lambda x: x.val, child_nodes)))
    while child_nodes:
        next_child_nodes = []
        row = []
        for node in child_nodes:
            if node.left:
                next_child_nodes.append(node.left)
                row.append(node.left.val)
            else:
                row.append('  (|__|)  ')
            if node.right:
                next_child_nodes.append(node.right)
                row.append(node.right.val)
            else:
                row.append('  (|__|)  ')
        outp.append(row)
        child_nodes = next_child_nodes
    line_len = max([max(map(len, outp)) * char_space_per_node, 80])
    final_outp = []
    for line in outp:
        space_betw = int((line_len - char_space_per_node*len(line)))
        if len(line) != 0:
            space_betw = int(space_betw / (1 + len(line)))
        partial = ''
        for nodeval in line:
            partial += space_betw * ' '
            val_str = str(nodeval)
            within_node_spacing = char_space_per_node - len(val_str)
            if within_node_spacing > 0:
                val_str = ' ' * within_node_spacing + val_str
            partial += val_str
        final_outp.append(partial)
        print(partial)
    return final_outp

arr01 = [1, 2, 20, 30, 36, 40, 55]
tree_root1 = arr_to_BST(arr01)

print_BST(tree_root1)


