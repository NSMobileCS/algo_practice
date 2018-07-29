# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next:
            return head
        A = B = head.next
        moves = 1
        while B.next:
            B = B.next
            if moves % 2 == 0:
                A = A.next
            moves += 1
        return A
        
