
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

var mergeTwoLists = function(l1, l2) {
  if ( !( l1 && l2 ) ) return l2 || l1;
  let optiRun; // magically makes it faster. jk; ctrls if we can just alternate.
  let pullFrom = optiRun = 0;  // bool; 1 = use l2; see below
  let head = new ListNode(null);
  let prev = head;
  while ( l1 && l2 ) {
    if ( optiRun == 1 ) {
      // optimized path once nonequal elems found
      if ( pullFrom == 1 ) {
        prev.next = l2;
        l2 = l2.next;
      } else {
        prev.next = l1;
        l1 = l1.next;
      }
      prev = prev.next;
      // XOR bit twiddling alternator ( pullFrom goes 0->1->0->1...)
      pullFrom ^= 1;
    } else {
      // need to compare still, items have been equal
      if ( l2.val < l1.val ) {
        prev.next = l2;
        l2 = l2.next;
        optiRun = 1;
      } else {
        if ( l2.val > l1.val ) {
          optiRun = pullFrom = 1;
        }
        prev.next = l1;
        l1 = l1.next;
      }
      prev = prev.next;
    }
  }
  if (l2) {
    prev.next = l2;
  } else if (l1) {
      prev.next = l1;
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
