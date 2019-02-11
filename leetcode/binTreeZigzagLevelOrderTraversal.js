
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var lvlOrderTraversal = function (root) {
    let res = [root.val];
    let curLvl = [root];
    var idxCurLvl = 0; // idx of curLvl
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

// var zigzagLevelOrder = function (root) {
//     let arr = lvlOrderTraversal(root);
//     for (let idx=0; idx<arr.length; idx++) {
//         if (idx % 2 === 1) {
//             arr[idx].reverse();
//         }
//     }
//     return arr;
// };

// var zigzagLevelOrder = function(root) {
//     if (!root || !root.val) return [];
//     let res = [];
//     let lvlNum = 0;
//     let lvlNodes = [root];
//     let nextLvlNodes = [];
//     while (lvlNodes) {
//         let lvlNodeVals = lvlNodes.map(
//             (node) => {
//                 if (node.left) {
//                     nextLvlNodes.push(node.left);
//                 }
//                 if (node.right) {
//                     nextLvlNodes.push(node.right);
//                 }
//                 return node.val;
//             }
//             );
//         if (lvlNum % 2 === 0) {
//             res.push(lvlNodeVals);
//         } else {
//             res.push(lvlNodeVals.reverse())
//         }
//         lvlNodes = nextLvlNodes;
//         lvlNum++;
//     }
//     return res;
// };


let r = new TreeNode(3);
r.left = new TreeNode(1);
r.left.left = new TreeNode(0);
r.left.rigth = new TreeNode(1.5);
r.right = new TreeNode(5);
r.right.left = new TreeNode(4);
r.right.right = new TreeNode(6);

console.log(lvlOrderTraversal(r));
console.log(zigzagLevelOrder(r));