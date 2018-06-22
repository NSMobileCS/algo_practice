// n-ary tree Javascript constructor
function NaryTreeNode(val) {
  this.val = val;
  this.children = [];
}


function findTreeSumLevelN(root, nTargetLevel){
  if ( (!root) || (nTargetLevel<0) ) return 0;
  let childArr = root.children;
  let nCurLevel = 0;
  let levelSum = root.val;
  while ( nCurLevel < nTargetLevel ) {
    // return 0 if we're past all the data already (no child nodes)
    if ( (!childArr) || (childArr.length < 1) ) return 0;
    levelSum = 0;
    let nextChildArr = [];
    // use the childArr to sum values & create nextChildArr
    childArr.forEach(
      node => {
        if (node && node.val) {
          levelSum += node.val;
        }
        if (node.children && node.children.length>0) {
          node.children.forEach( node => nextChildArr.push(node) );
        }
      }
    );
    childArr = nextChildArr;
    nCurLevel++;
    }
  return levelSum;
}

function buildTree () {

  // returns this tree:
  //        (5) <-root (returned)
  //      /  \  \
  //    (2) (18)  (9)
  //   /  \   |
  // (7)  (1) (5)

  let root = new NaryTreeNode(5);
  let a = new NaryTreeNode(2);
  a.children.push(new NaryTreeNode(7));
  a.children.push(new NaryTreeNode(1));
  root.children.push(a);
  let b = new NaryTreeNode(18);
  b.children.push(new NaryTreeNode(5));
  root.children.push(b);
  root.children.push(new NaryTreeNode(9));
  return root;
}

for (let idx=0; idx <3; idx++) {
    let root = buildTree();
    console.log(idx);
    console.log(findTreeSumLevelN(root, idx));
    console.log('______________________');
}