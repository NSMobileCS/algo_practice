from collections import defaultdict

class Solution:
    def leastBricks(self, wall):
        d = defaultdict(int)
        levels = [None] * len(wall)
        freq_val = None
        frequency = 0
        for rdx in range(len(wall)):
            row_sum = 0
            level = set()
            for bdx in range(len(wall[rdx])-1):
                brick = wall[rdx][bdx]
                row_sum += brick
                wall[rdx][bdx] = row_sum #the offset of the gaps is what matters
                d[row_sum] += 1
                level.add(row_sum)
                if d[row_sum] > frequency:
                    freq_val = row_sum
                    frequency = d[row_sum]
            levels[rdx] = level
        return len([s for s in levels if freq_val not in s])


case1 = [
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1]
]


print(Solution().leastBricks(case1))
print('should be 2')