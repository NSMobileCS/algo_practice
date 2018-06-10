/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if ( !head || !head.val ) return head;
    if (head.val == val) return removeElements(head.next, val);
    let cur;
    let prev = head;
    while ( cur = prev.next ) {
        if (cur.val == val) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
    }
    return head;
}