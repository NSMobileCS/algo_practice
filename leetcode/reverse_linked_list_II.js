/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if ( !head || !head.next ) return head;
  let cur = head;
  let tail, prev, rStart, rEnd;
  let lastFwdNode = prev = tail = null;
  for (let idx = 1; idx<=n; idx++) {
    if (idx == m) {
      lastFwdNode = prev;
      rStart = cur;
    }
    if (idx == n) {
      rEnd = cur;
      tail = cur.next;
      cur.next = null;
      break;
    }
    prev = cur;
    cur = cur.next;
  }
  prev = rStart;
  cur = rStart.next;
  rStart.next = tail;
  while (cur) {
    let _cur = cur.next;
    cur.next = prev;
    prev = cur;
    cur = _cur;
  }
  if (lastFwdNode) {
    lastFwdNode.next = rEnd;
  } else {
    head = rEnd; // if m was 1, the head will be the 1st elem. in the new reversed portion
  }
  return head;
}

