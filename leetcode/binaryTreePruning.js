const description = `We are given the head node root of a binary tree, where additionally every
     node's value is either a 0 or a 1.
    Return the same tree where every subtree (of the given tree) 
    not containing a 1 has been removed.
    (Recall that the subtree of a node X is X, plus every node that is a descendant of X.)
`;

function hasNonZero (root) {
    if (!root) return false;
    if (root.val != 0) return true;
    return ( hasNonZero(root.left) ||  hasNonZero(root.right) );
}


function unpack (root) {
    var arr = [];
    function _unpack (root)
        if ( !(root && root.val) ) {
            return;
        }
        let a = []
        if ( root.left ) {
            memo = [[root]];
        }

}

function pruneTree (root) {
    if ( hasNonZero(root.left) ) {

    }
}




