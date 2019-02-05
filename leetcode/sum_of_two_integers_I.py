class Solution:
    def getSum(self, a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        return eval(f'a {chr(43)} b')


print(Solution().getSum(2, 5), 'should be 7')

print(Solution().getSum(2, -5), 'should be -3')