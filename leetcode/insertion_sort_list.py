# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def __init__(self):
        self.sortedNodes = ListNode(None)
    def insertionSortList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        while head:
            next_head = head.next
            self.insert(head)
            head = next_head
        return self.sortedNodes.next
    def insert(self, node):
        cur = self.sortedNodes
        # if not cur.next:
        #     cur.next = node
        #     return
        while cur.next and cur.next.val > node.val:
            cur = cur.next
        tmp = None
        if cur.next: # exited b/c val was greater, but there's a cur.next
            tmp = cur.next
        node.next = tmp
        cur.next = node





