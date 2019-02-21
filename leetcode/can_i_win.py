class Solution:
    def canIWin(self, maxChoosableInteger: 'int', desiredTotal: 'int') -> 'bool':
        nums = list(range(1, maxChoosableInteger+1))[::-1]
        total = turns = 0
        while nums:

            if total + nums[0] >= desiredTotal:
                if turns % 2 == 0:
                    return True
                else:
                    return False
            total += nums.pop()
            turns += 1
        return False

# case 1
#    max(chooseableNums) + total >= desiredTotal    RETN TRUE
# case  2
#    max(chooseableNums) + total < desiredTotal
#                               if min(chooseableNums) + max(chooseableNums) >= desiredTotal   RETN FALSE

