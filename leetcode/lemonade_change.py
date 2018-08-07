class Solution:
    def lemonadeChange(self, bills):
        """
        :type bills: List[int]
        :rtype: bool
        """
        cash = {5:0, 10:0, 20:0}
        for bill in bills:
            change = bill - 5
            print(f'bill {bill}, change {change}')
            cash[bill] += 1
            if change > 5:
                if cash[10]:
                    cash[10] -= 1
                    change -= 10
            while change >= 5:
                if cash[5]:
                    cash[5] -= 1
                    change -= 5
                else:
                    return False
        return True


S = Solution()
mkChange = S.lemonadeChange

arr = [5, 5, 5, 10, 20]
print(mkChange(arr))

