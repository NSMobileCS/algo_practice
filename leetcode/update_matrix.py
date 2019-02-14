class Solution:
    def updateMatrix(self, matrix: 'List[List[int]]') -> 'List[List[int]]':
        res = list([[None]*len(matrix[0]) for _ in range(len(matrix))])
        zeroes = []
        for rdx, row in enumerate(matrix):
            for cdx, cell in enumerate(row):
                if cell == 0:
                    res[rdx][cdx] = 0
                    zeroes.append((rdx, cdx,))
        for (rdx, cdx) in zeroes:
            print(rdx, cdx)
            res[rdx][cdx] = 0
            for n in range(cdx, len(matrix)):
                val = n - cdx
                if res[rdx][n] is None:
                    res[rdx][n] = val
                else:
                    if val < res[rdx][n]:
                        res[rdx][n] = val
                    else:
                        break
            for n in range(cdx, -1, -1):
                val = cdx - n
                if res[rdx][n] is None:
                    res[rdx][n] = val
                else:
                    if val < res[rdx][n]:
                        res[rdx][n] = val
                    else:
                        break
            for n in range(rdx, len(matrix[0])):
                val = n - rdx
                if res[n][cdx] is None:
                    res[n][cdx] = val
                else:
                    if val < res[n][cdx]:
                        res[n][cdx] = val
                    else:
                        break
            for n in range(rdx, -1, -1):
                val = rdx - n
                if res[n][cdx] is None:
                    res[n][cdx] = val
                else:
                    if val < res[n][cdx]:
                        res[n][cdx] = val
                    else:
                        break
        return res


mrx = [[6, 6, 0],
       [5, 0, 0],
       [5, 0, 5]]


print(mrx)
print(Solution().updateMatrix(mrx))