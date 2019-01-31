class Solution:
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        arr = [1 + abc.index(char) for char in s]
        for idx in range(len(arr)):
            arr[-1-idx] *= (26**idx)
            # go thru backward & increase base 26
        return sum(arr)


titleToNumber = Solution().titleToNumber
print('titleToNumber(\'AB\'), should return 28')
print(titleToNumber('AB'))
