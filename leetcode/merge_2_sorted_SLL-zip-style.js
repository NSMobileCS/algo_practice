
function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.log = function () {
  let cur = this;
  let arr = [`${cur.val}`];
  while ( cur.next ) {
    cur = cur.next;
    arr.push(`${cur.val}`);
  }
  outp = arr.join('|-~->');
  return outp;
}

const parseToSLL = (s) => {
  let arr = s.split( /\|?\-?\~?\-{0,3}\>/ );
  let val = arr.shift();
  let head = new ListNode(val);
  let cur = head;
  while (val = arr.shift()) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return head;
}


let l1 = parseToSLL('1->2->4');
let l2 = parseToSLL('1->3->4');
console.log('l1');
console.log(l1);
console.log('l2');
console.log(l2);

var mergeTwoLists = function(l1, l2) {
  if ( !( l1 && l2 ) ) return l2 || l1;
  let head = new ListNode(null);
  let prev = head;
  let pullFrom = 0;  // bool; 1 = use l2
  while ( l1 && l2 ) {
  console.log(`
    l1 ${l1.log()}
    l2 ${l2.log()}
    head ${head.log()}
    prev ${prev.log()}
  `);
    if ( pullFrom == 1 ) {
      prev.next = l2;
      l2 = l2.next;
    } else {
      prev.next = l1;
      l1 = l1.next;
    }
    prev = prev.next;
    pullFrom ^= 1;
    // pullFrom = (pullFrom + 1) % 2;
  }
  if (l2) {
    console.log('if l2 ( --> TRUE ) ');
    prev.next = l2;
  } else {
    if (l1) {
      console.log('if l1 ( --> TRUE ) ');
      prev.next = l1;
    }
  }
  return head.next;
};


// var mergeTwoLists = function(l1, l2) {
//     if (!l1) return l2;
//     const head = l1;
//     let cur = head;
//     let pullFrom = 1;  // bool; 1 = use l2
//     l1 = l1.next;
//     while ( l1 && l2 ) {
//       if ( pullFrom ) {
//         cur.next = l2;
//         l2 = l2.next;
//       } else {
//         cur.next = l1;
//         l1 = l1.next;
//       }
//       pullFrom ^= 1; // XOR w/ 1 & update (binary oscillation)
//     }
//     if (l2) {
//       cur.next = l2;
//     } else {
//       if (l1) {
//         cur.next = l1;
//       }
//     }
//     return head;
// };

let headMerge = mergeTwoLists(l1, l2);
console.log(headMerge.log());
