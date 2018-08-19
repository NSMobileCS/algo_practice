class Solution:
    def projectionArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """

        if not grid or len(grid) < 1:
            return 0
        col_maxes = [0] * len(grid[0]) #initialize array to hold column max val's
        area = 0
        for row in grid:
            row_max = 0
            for cdx, cell in enumerate(row):
                if cell <= 0:
                    continue
                area += 1  #nonzero cells are worth 1 in the xy plane
                if cell > col_maxes[cdx]:
                    col_maxes[cdx] = cell
                if cell > row_max:
                    row_max = cell
            area += row_max
        return area + sum(col_maxes)

projArea = Solution().projectionArea
print(f'projArea([[1,1],[1,1]]) -> {projArea([[1,1],[1,1]])}')
print(f'projArea([[1,2],[3,4]]) -> {projArea([[1,2],[3,4]])}')
