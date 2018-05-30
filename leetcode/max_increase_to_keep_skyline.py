from collections import deque

class Solution:
  def maxIncreaseKeepingSkyline(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    res = 0
    rMax = [max(r) for r in grid]
    cMax = deque()
    for cdx in range(len(grid)):
      cMax.append(max([row[cdx] for row in grid]))
    for rdx, row in enumerate(grid):
      for cdx, cell in enumerate(row):
        res += min(cMax[cdx], rMax[rdx])-cell
    return res


