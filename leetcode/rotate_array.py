class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        lennums = len(nums)
        k %= lennums
        if k == 0:
            return
        buffer = nums[-k:]
        ofsback = len(buffer)   # offset back
        for idx in range(lennums-k)[::-1]:
            nums[idx+k] = nums[idx]
        for jdx, val in enumerate(buffer):
            nums[jdx] = val




l = [1,2,3,4,5,6,7]
S = Solution()
S.rotate(l, 3)
print(l)
