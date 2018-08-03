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
var _delDups = function ( head ) {
    let cur;
    let prev = cur = head;
    if ( !head || !head.next ) return head;
    while ( cur ) {
        if ( cur.next && cur.val == cur.next.val ) {
            let rmVal = cur.val;
            while ( cur && cur.val == rmVal ) {
                cur = cur.next;
            }
            prev.next = cur;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return head;
};

var deleteDuplicates = function(head) {
    let rootWrapper = new ListNode(null);
    rootWrapper.next = head;
    return _delDups(rootWrapper).next;
}
