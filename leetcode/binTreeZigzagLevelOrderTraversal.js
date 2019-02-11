
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let res = [[root.val]];
    let curLvl = [root];
    let idxCurLvl = 0; // idx of curLvl
    while (curLvl && curLvl.length > 0) {
        let nextLvl = [];
        idxCurLvl++;
        for (let nod of curLvl) {
            if (nod.left) {
                nextLvl.push(nod.left);
            }
            if (nod.right) {
                nextLvl.push(nod.right);
            }
        }
        curLvl = nextLvl;
        if (curLvl.length > 0) {
            let renderedLevel = curLvl.map( x => x.val );
            if (idxCurLvl % 2 === 1) {
                renderedLevel.reverse();
            }
            res.push(renderedLevel);
        }
    }
    return res;
};



let r = new TreeNode(3);
r.left = new TreeNode(1);
r.left.left = new TreeNode(0);
r.left.rigth = new TreeNode(1.5);
r.right = new TreeNode(5);
r.right.left = new TreeNode(4);
r.right.right = new TreeNode(6);

let tmp = [r];
while (tmp && tmp.length > 0) {
    console.log(tmp.map(x => x.val));
    let newTmp = [];
    for (let t of tmp) {
        if (t.left) {
            newTmp.push(t.left);
        }
        if (t.right) {
            newTmp.push(t.right);
        }
    }
    tmp = newTmp;
}

console.log(zigzagLevelOrder(r));
console.log(zigzagLevelOrder(new TreeNode(null)));
console.log(zigzagLevelOrder());
