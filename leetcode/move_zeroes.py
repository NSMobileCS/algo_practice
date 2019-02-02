class Solution:
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        zeroes = [idx for idx, elem in enumerate(nums) if elem == 0]
        for zdx in zeroes[::-1]:
            nums.pop(zdx)
            nums.append(0)