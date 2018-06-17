# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None
    def __str__(self):
        outp = []
        nextnode = self
        while nextnode:
            outp.append(nextnode.val)
            nextnode = nextnode.next
        return '->'.join(outp)



class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        # self.printSLL(head)
        prev_node_mappings = dict()
        prev = head
        if not head.next:
            return None
        prev_node_mappings[id(prev)] = None
        cur = prev.next
        while cur:
            pkey = id(prev)
            ckey = id(cur)
            if ckey in prev_node_mappings:
                return cur
            else:
                prev_node_mappings[ckey] = pkey
            cur = cur.next
        return None

    # def printSLL(self, node):
    #     outp = []
    #     while node:
    #         outp.append(str(node.val))
    #         node = node.next
    #         if len(outp) > 40:
    #             break
    #     return '->'.join(outp)

