/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if ( !head || !head.next ) {
        return head;    
    }
    let odd = true;
    let oddHead = head;
    let cur;
    let evenHead = cur = head.next;
    while (cur.next) {
        if (odd) {
            oddHead.next = cur.next;
            oddHead = oddHead.next;
        } else {
            evenHead = cur.next;
            evenHead = evenHead.next;
        }
        cur = cur.next;
        odd ^= 1;
    }
    if (oddHead && evenHead) {
        oddHead.next = evenHead;
    }
    return head;
};
