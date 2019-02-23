class Solution:
    def findMaxConsecutiveOnes(self, nums: 'List[int]') -> 'int':
        longest_run = 0
        cur_run = 0
        for n in nums:
            if n == 1:
                cur_run += 1
                longest_run = max(cur_run, longest_run)
            else:
                cur_run = 0
        return longest_run


arr = [1, 1, 0, 0, 1, 1, 1, 0]
print(Solution().findMaxConsecutiveOnes(arr))