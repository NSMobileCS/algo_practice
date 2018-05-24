/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let prev = null;
  let r1 = head;
  let r2 = head;
  for (let i = 1; i < n; i++) {
    r2 = r2.next;
  }
  while ( r2 && r2.next ) {
    prev = r1;
    r1 = r1.next;
    r2 = r2.next;
  }
  if (prev) {
    prev.next = r1.next;
  } else {
    head.next = r1.next;
  }
  return head;
};