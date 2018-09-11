# make a linked list out of any python sequence
def mk_list(seq):
    pre_root = cur = ListNode(None)
    for x in seq:
        cur.next = ListNode(x)
        cur = cur.next
    return pre_root.next


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __repr__(self):
        outp = []
        cur = self
        while cur and cur.val:
            outp.append(str(cur.val))
            cur = cur.next
        return ' -> '.join(outp)




def buffered_list(root):
    """
    generator fn that gives next node if present else None
    """
    cur = root
    while True:
        if cur is None:
            yield None
        else:
            popped = cur
            cur = cur.next
            yield popped


def buffer_lists(lists):
    """
    takes array of SLLs, conv's to buffered_list obj's, & yields list of nodes
    one from each SLL at a time
    """
    buffered_lists = [buffered_list(head) for head in lists]
    arr = [next(it) for it in buffered_lists]
    while True:
        arr = [next(it) for it in buffered_lists]

        for node in buffered_lists:
            x = next(node)
            if x:
                arr.append(x)
        if arr:
            yield sorted(arr, key=lambda x: x.val)
        else:
            return


class Solution:
    def nodeToStr(self, root):
        res = []
        while root and root.val:
            res.append(str(root.val))
            root = root.next
        return ' -> '.join(res)
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        arr = []
        for li in lists:
            idx = 0
            cur = li
            while cur:
                arr.append(cur)
                cur = cur.next
        pre_root = cur = ListNode(None)
        for x in sorted(arr, key=lambda x: x.val):
            cur.next = x
            cur = cur.next
        if cur and cur.next:
            cur.next = None
        return pre_root.next









    # def mergeKLists(self, lists):
    #     """
    #     :type lists: List[ListNode]
    #     :rtype: ListNode
    #     """
    #     pre_root = cur = ListNode(None)
    #     bls = list([buffered_list(node) for node in lists])
    #     arr = list([next(it) for it in bls])
    #     cur_max_val = max(arr, key=lambda x: x.val if x else 0).val
    #     print('cur_max_val', cur_max_val)
    #     while True:
    #         arr2 = []
    #         for idx, node in enumerate(arr):
    #             if node is None:
    #                 continue
    #             while node and node.val < cur_max_val:
    #                 node = next(bls[idx])


        # for arr in list_iterator:
        #     for node in arr:
        #         cur.next = node
        #         cur = cur.next
        # return pre_root.next




list1 = mk_list(range(1,11,4))
list2 = mk_list(range(1, 31, 5))


S = Solution()
result1 = S.mergeKLists([list1, list2])
print(result1)

# list_iterator = buffer_lists([list1, list2])
# for arr in list_iterator:
#     print([n.val for n in arr])

