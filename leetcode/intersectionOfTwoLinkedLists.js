/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    if (headA == headB) return headA;
    let curA = headA;
    let curB = headB;
    curA.prev = Number.MIN_SAFE_INTEGER;
    curB.prev = Number.MIN_SAFE_INTEGER;
    while ((curA && curA.next) || (curB && curB.next)) {
        if (curA.next) {
            if (curA.next.prev) {
                return curA.next;
            } else {
                curA.next.prev = curA;
                curA = curA.next;
            }
        }
        if (curB.next) {
            if (curB.next.prev) {
                return curB.next;
            } else {
                curB.next.prev = curB;
                curB = curB.next;
            }
        }
    }
    return curA == curB ? curB : null;
};


3
[3,4,5,6,7,8,9,10,11,12,13,14,15]
[2,3,4,5,6,7,8,9,10,11,12,13,14,15]
0
1




// 1
// [1,2,3,4,5,6,7,8,9,10,11,12,13]
// [1,2,3,4,5,6,7,8,9,10,11,12,13]
// 0
// 0

1
[1,2,3,4,5,6,7,8,9,10,11,12,13]
[1,2,3,4,5,6,7,8,9,10,11,12,13]
0
0
