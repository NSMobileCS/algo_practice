// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const printTree = function (root) {
    let arr = [root];
    while (arr && arr.length > 0) {
        let newArr = [];
        let printArr = [];
        arr.forEach( x => {
            if (!x) return;
            printArr.push(x.val);
            if (x.left) newArr.push(x.left);
            if (x.right) newArr.push(x.right);
        });
        let spacing = ' ';
        for (let idx = 0; idx < (50 / (printArr.length + 0.001) ); idx++) {
            spacing += ' ';
        }
        let s2;
        let s1 = s2 = '';
        for (let idx = 0; idx < printArr.length; idx++) {
            s1 += spacing;
            s1 += ' | ';
            s2 += spacing;
            s2 += printArr[idx];
        }
        console.log(s1);
        console.log(s2);
        arr = newArr;
    }
}
TreeNode.prototype.log = function () {
    printTree(this);
}


var _flatten = function(root) {
    if (!root) return null;
    console.log('------');
    console.log('------');
    root.log();
    console.log('------');
    console.log('------');
    let rtTail = _flatten(root.right);
    let lefTail = root;
    if (root.left) {
        lefTail = _flatten(root.left)
    }
    console.log("lefTail.val");
    console.log(lefTail.val);
    if (root.right) {
        lefTail.right = root.right;
    }
    root.right = root.left;
    root.left = null;
    while (lefTail.right) {
        lefTail = lefTail.right;
    }
    return lefTail; // returning the final link as optimization.
};

var flatten = function (root) {
    _flatten(root);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// root.log();
flatten(root);
console.log('------');
root.log();