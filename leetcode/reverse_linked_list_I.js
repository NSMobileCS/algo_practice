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
var reverseList = function(head) {
    if (head && head.next) {
        let prev = head;
        let cur = head.next;
        prev.next = null;
        while (cur){
            let _cur = cur.next;
            cur.next = prev;
            prev = cur;
            cur = _cur;
        }
        head = prev;
    }
    return head;
            
       
    
};
