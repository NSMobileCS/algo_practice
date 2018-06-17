class Solution:
    def merge(self, nums1, m, nums2, n):
        nums2 = sorted(nums1[:m]+nums2[:n])
        for idx, val in enumerate(nums2):
            nums1[idx] = val
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        
# this solution leverages Python's powerful Timsort based sorted function
# it would be a 1 liner (returning what nums2 gets overwritten to)
# except that the assignment was to modify in place, so we do.
