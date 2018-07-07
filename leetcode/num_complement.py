class Solution:
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """
        arr = list(bin(num)[2:])
        arr = map(lambda x: '0' if x == '1' else '1', arr)
        return int(''.join(arr), 2)
