// /**
//  * Definition for singly-linked list.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function print(head) {
  if (!head) return '';
  if (!head.next) return `${head.val}`;
  return `${head.val}->${print(head.next)}`;
}

function CSVtoSLL(s) {
  let arr = s.split(',');
  let val = arr.shift();
  let head = new ListNode(val);
  let prev = head;
  while ( val = arr.shift() ) {
    let cur = new ListNode(val);
    prev.next = cur;
    prev = cur;
  }
  return head;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return false;
  let r1 = head;
  let r2 = r1.next;
  while (r2 = r2.next) {
    if (!r2.next) break;
    r1 = r1.next;
    r2 = r2.next;
    if (r1 === r2) return true;
  }
  return (r1 === r2);
};


let goodList = CSVtoSLL('3,5,5,68,42,1');
console.log(print(goodList));