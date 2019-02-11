const TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
}

const parseArr = function (arr) {
    let lvls = [];
    let idx = 0;
    let n = 0;
    while (idx < arr.length){
        let jdx = idx + Math.pow(2, n);
        lvls.push(arr.slice(idx, jdx));
        n++;
        idx = jdx;
    }
    return lvls;
    // let root = new TreeNode(lvls[0])
};

const parsedArrToTree = function (arr) {
    if (!arr || !arr[0]) return;
    let root = new TreeNode(arr[0][0]);
    let prevLvl = [];
    for (let idx = 1; idx < arr.length; idx++) {
        let nextLvl = [];
        for (let jdx=0; jdx<prevLvl.length; jdx++ ) {
            let cur = prevLvl[jdx];
            if ((arr[idx][jdx*2] !== null) && (arr[idx][jdx*2] !== undefined)) {
                cur.left = new TreeNode(arr[idx][jdx*2]);
                nextLvl.push(cur.left);
            }
            if ((arr[idx][1+(jdx*2)] !== null) && (arr[idx][1+(jdx*2)] !== undefined)) {
                cur.right = new TreeNode(arr[idx][1+(jdx*2)]);
                nextLvl.push(cur.right);
            }
         }
         prevLvl = nextLvl;
    }
    return root;
};


let arr = [3,9,20,null,null,15,7];



module.exports = {
    TreeNode: TreeNode,
    parsedArrToTree:parsedArrToTree,
    parseArr: parseArr,
    arrToBST: (arr) => {parsedArrToTree(parseArr(arr))},
    arr: arr,
};