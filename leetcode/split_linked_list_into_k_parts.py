# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

import math

class Solution:
    def splitListToParts(self, root: ListNode, k: int) -> List[ListNode]:
        arr = []
        cur = root
        while cur:
            arr.append(cur)
            cur = cur.next
        part_size = math.ceil(len(arr)/k)
        idx = 0
        res = []
        for _ in range(k):
            res.append(arr[idx])
            try:
                arr[idx + part_size - 1].next = None
            except IndexError:
                pass
            idx += part_size
            if idx >= len(arr):
                break
        return res

        
