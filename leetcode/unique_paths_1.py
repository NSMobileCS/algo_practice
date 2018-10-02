class Solution:
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        if m == 1 or n == 1:
            return 1
        return self.uniquePaths(m-1, n) + self.uniquePaths(m, n-1)


unique_paths = Solution().uniquePaths

m28, n28 = 7, 3

print('should be 28:')
print(unique_paths(m28, n28))

m3, n3 = 3, 2
print('should be 3:')
print(unique_paths(m3, n3))
