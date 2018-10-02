class Solution:
    def __init__(self):
        self.lookup = dict()
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        if m == 1 or n == 1:
            return 1
        elif m == 2:
            return n
        elif n == 2:
            return m
        if (m, n) in self.lookup:
            return self.lookup[(m, n)]
        else:
            res = self.uniquePaths(m-1, n) + self.uniquePaths(m, n-1)
            self.lookup[(m, n)] = res
            return res


unique_paths = Solution().uniquePaths


# m28, n28 = 7, 3
# print('should be 28:')
# print(unique_paths(m28, n28))

# m3, n3 = 3, 2
# print('should be 3:')
# print(unique_paths(m3, n3))
