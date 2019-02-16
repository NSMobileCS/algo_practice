class Solution:
    def canIWin(self, maxChoosableInteger: 'int', desiredTotal: 'int') -> 'bool':
        nums = list(range(1, maxChoosableInteger+1))
        p1 = p2 = turns = 0
        for k in nums[::-1]:
            if turns % 2 == 0:
                p1 += k
                if p1 >= 100:
                    return True
            else:
                p2 += k
                if p2 >= 100:
                    return False
            turns += 1
        return p1 >= 100
