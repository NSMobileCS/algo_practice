class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        flips = []
        for rdx, row in enumerate(board):
            for cdx, cell in enumerate(row):
                neighbors = 0
                if cdx - 1 > -1:
                    neighbors += board[rdx][cdx-1]  # left horizontal
                    if rdx - 1 > -1:
                        neighbors += board[rdx-1][cdx-1]    # upper left
                    if rdx + 1 < len(board):
                        neighbors += board[rdx+1][cdx-1]    # lower left
                if cdx + 1 < len(row):
                    neighbors += board[rdx][cdx+1]  # rt horizontal
                    if rdx - 1 > -1:
                        neighbors += board[rdx-1][cdx+1] #upper rt
                    if rdx + 1 < len(board):
                        neighbors += board[rdx+1][cdx+1] # lower rt
                if rdx - 1 > -1:
                    neighbors += board[rdx-1][cdx]  # directly above
                if rdx + 1 < len(board):
                    neighbors += board[rdx+1][cdx]  # directly below

                # now we have the neighbors counted, see if it needs to change
                if neighbors == 2:
                    continue    # if 2 neighbors, no change
                elif neighbors < 2:
                    if board[rdx][cdx]:
                        flips.append((rdx, cdx,))   # cell dies
                elif neighbors > 3:
                    if board[rdx][cdx]:
                        flips.append((rdx, cdx,))   # cell dies
                else:
                    if not board[rdx][cdx]:
                        flips.append((rdx, cdx,))

        for (rdx, cdx) in flips:
            board[rdx][cdx] ^= 1
